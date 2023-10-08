from flask import Flask, request, make_response, jsonify,session
from werkzeug.security import generate_password_hash, check_password_hash
from flask_restful import Api, Resource

from flask_migrate import Migrate
from flask_cors import CORS

from models import db, Event, User,Ticket

app = Flask(__name__)
app.secret_key = "super secret key"
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///events.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False
api = Api(app)
CORS(app)


migrate = Migrate(app, db)

db.init_app(app)



# Signup route and function
@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    phone_number = data.get('phone_number')

    if not username or not email or not password:
        return jsonify({'message': 'Username, email, and password are required'}), 400

    existing_user = User.query.filter_by(username=username).first()
    if existing_user:
        return jsonify({'message': 'Username already exists'}), 400

    new_user = User(username=username, email=email, password=password, phone_number=phone_number)

    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User created successfully'}), 201

# Login route and function
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'message': 'Username and password are required'}), 400

    user = User.query.filter_by(username=username).first()


    if not user or user.password != password:
        return jsonify({'message': 'Invalid credentials'}), 401
    
    session['user_id'] = user.id

    return jsonify({'message': 'Login successful'}), 200

class CheckSession(Resource):

    def get(self):
        user = User.query.filter(User.id == session.get('user_id')).first()
        if user:
            return jsonify(user.id)
        else:
            return jsonify({'message': '401: Not Authorized'}), 401

api.add_resource(CheckSession, '/check_session')




# Get All Events
@app.route('/events', methods=['GET'])
def get_events():
    events = Event.query.all()
    event_list = []
    for event in events:
        event_data = {
            'id': event.id,
            'name': event.name,
            'date': event.date,
            'location': event.location,
            'tickets_available': event.tickets_available,
            'image_url': event.image_url,
            'category': event.category
        }
        event_list.append(event_data)

    return make_response(jsonify(event_list), 200)




# Get Single Event
@app.route('/events/<int:event_id>', methods=['GET'])
def get_event(event_id):
    event = Event.query.get(event_id)
    if event:
        event_data = {
            'id': event.id,
            'name': event.name,
            'date': event.date,
            'location': event.location,
            'tickets_available': event.tickets_available,
            'image_url': event.image_url,
            'category': event.category
        }
        return make_response(jsonify(event_data), 200)
    else:
        return jsonify({'message': 'Event not found'}), 404
 # Ticket Purchase route and function
@app.route('/buy-tickets/<int:event_id>', methods=['POST'])
def buy_tickets(event_id):
    data = request.get_json()
    user_id = data.get('user_id')  # Make sure to send user_id from the frontend
    num_tickets = data.get('num_tickets')

    event = Event.query.get(event_id)

    if not event:
        return jsonify({'message': 'Event not found'}), 404

    if event.tickets_available < num_tickets:
        return jsonify({'message': 'Not enough tickets available'}), 400

    # Create tickets and associate them with the user and the event
    for _ in range(num_tickets):
        new_ticket = Ticket(user_id=user_id, event_id=event_id, price=2000) 
        db.session.add(new_ticket)
        event.tickets_available -= 1

    db.session.commit()

    return jsonify({'message': 'Tickets purchased successfully'}), 201




if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)

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
    

    return jsonify(user.id, {'message': 'Login successful'}), 200

@app.route('/logout', methods=['DELETE'])
def Logout():
    session['user_id'] = None
    return jsonify({'message': '204: No Content'}), 204


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
    
# Add Event route and function
@app.route('/events', methods=['POST'])
def add_event():
    data = request.get_json()

    name = data.get('name')
    date = data.get('date')
    location = data.get('location')
    tickets_available = data.get('tickets_available')
    image_url = data.get('image_url')
    category = data.get('category')
   

    if not name or not date or not location or not tickets_available or not category:
        return jsonify({'message': 'Missing required fields'}), 400

    # Create a new event instance
    new_event = Event(name=name, date=date, location=location, 
                      tickets_available=tickets_available, 
                      image_url=image_url, category=category)  

    db.session.add(new_event)
    db.session.commit()

    return jsonify({'message': 'Event added successfully'}), 201
# Update Event route and function
@app.route('/events/<int:event_id>', methods=['PATCH'])
def update_event(event_id):
    event = Event.query.get(event_id)

    if not event:
        return jsonify({'message': 'Event not found'}), 404

    data = request.get_json()
    event.name = data.get('name', event.name)
    event.date = data.get('date', event.date)
    event.location = data.get('location', event.location)
    event.tickets_available = data.get('tickets_available', event.tickets_available)
    event.image_url = data.get('image_url', event.image_url)
    event.category = data.get('category', event.category)

    db.session.commit()

    return jsonify({'message': 'Event updated successfully'}), 200
 # Ticket Purchase route and function
@app.route('/buy-tickets/<int:event_id>', methods=['POST'])
def buy_tickets(event_id):
    data = request.get_json()
    user_id =  session['user_id']
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

@app.route('/ticket/<int:id>', methods=['GET'])
def get_ticket(id):
    ticket = Ticket.query.get(id)
    if ticket:
        ticket_data = {
            'id': ticket.id,
            'user_id': ticket.user_id,
            'event_id': ticket.event_id

        }
        return make_response(jsonify(ticket_data), 200)
    else:
        return jsonify({'message': 'Ticket not found'}), 404

# class Logout(Resource):
#     session['user_id'] = None
#     return jsonify({'message': '204: No Content'}), 204

# api.add_resource(Logout, '/logout')

# def Logout():
#     session['user_id'] = None
#     return jsonify({'message': '204: No Content'}), 204


# api.add_resource(Logout, '/logout')





if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)

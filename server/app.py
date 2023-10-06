from flask import Flask, request, make_response, jsonify
from werkzeug.security import generate_password_hash, check_password_hash

from flask_migrate import Migrate
from flask_cors import CORS
from datetime import datetime

from models import db, Event, User,Ticket

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///events.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False
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

    return jsonify({'message': 'Login successful'}), 200

# Create an Event
@app.route('/events', methods=['POST'])
def add_event():
    name = request.json['name']
    date = request.json['date']
    location = request.json['location']
    tickets_available = request.json['tickets_available']
    image_url = request.json.get('image_url', None)

    category = request.json['category']

    new_event = Event(name, date, location, tickets_available, image_url, category)

    db.session.add(new_event)
    db.session.commit()

    return make_response(jsonify({
        'id': new_event.id,
        'name': new_event.name,
        'date': new_event.date,
        'location': new_event.location,
        'tickets_available': new_event.tickets_available,
        'image_url': new_event.image_url,
        'category': new_event.category
    }), 201)

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
@app.route('/events', methods=['POST'])
def add_event():
    try:
        # Parse the request data
        data = request.get_json()
        name = data.get('name')
        date = data.get(datetime('date'))
        location = data.get('location')
        tickets_available = data.get('tickets_available')
        image_url = data.get('image_url', None)
        category = data.get('category')

        # Check if all required fields are provided
        if not name or not date or not location or not tickets_available or not category:
            return jsonify({'message': 'Name, date, location, tickets_available, and category are required'}), 400

        # Create a new event object
        new_event = Event(name=name, date=date, location=location, tickets_available=tickets_available, image_url=image_url, category=category)

        # Add the event to the database
        db.session.add(new_event)
        db.session.commit()

        return jsonify({'message': 'Event created successfully', 'event_id': new_event.id}), 201
    except Exception as e:
        return jsonify({'message': str(e)}), 500

# Delete an Event
@app.route('/events/<int:event_id>', methods=['DELETE'])
def delete_event(event_id):
    try:
        event = Event.query.get(event_id)

        if event:
            db.session.delete(event)
            db.session.commit()
            return jsonify({'message': 'Event deleted successfully'})
        else:
            return jsonify({'message': 'Event not found'}), 404
    except Exception as e:
        return jsonify({'message': str(e)}), 500


# Update an Event
# @app.route('/events/<int:event_id>', methods=['PATCH'])
# def update_event(event_id):
#     event = Event.query.get(event_id)

#     if event:
#         event.name = request.json.get('name', event.name)
#         event.date = request.json.get('date', event.date)
#         event.location = request.json.get('location', event.location)
#         event.tickets_available = request.json.get('tickets_available', event.tickets_available)
#         event.image_url = request.json.get('image_url', event.image_url)
#         event.category = request.json.get('category', event.category)

#         db.session.commit()

#         event_data = {
#             'id': event.id,
#             'name': event.name,
#             'date': event.date,
#             'location': event.location,
#             'tickets_available': event.tickets_available,
#             'image_url': event.image_url,
#             'category': event.category
#         }

#         return jsonify(event_data)
#     else:
#         return jsonify({'message': 'Event not found'}), 404
# # Delete an Event
# @app.route('/events/<int:event_id>', methods=['DELETE'])
# def delete_event(event_id):
#     event = Event.query.get(event_id)

#     if event:
#         db.session.delete(event)
#         db.session.commit()
#         return jsonify({'message': 'Event deleted successfully'})
#     else:
#         return jsonify({'message': 'Event not found'}), 404
#     # Buy Tickets route and function
# @app.route('/buy_tickets/<int:event_id>', methods=['POST'])
# def buy_tickets(event_id):
#     data = request.get_json()
#     user_id = data.get('user_id')  # You need to include user_id in your request data

#     if not user_id:
#         return jsonify({'message': 'User ID is required'}), 400

#     event = Event.query.get(event_id)

#     if not event:
#         return jsonify({'message': 'Event not found'}), 404

#     if event.tickets_available <= 0:
#         return jsonify({'message': 'No tickets available for this event'}), 400

#     # Create a Ticket record for the user and event
#     new_ticket = Ticket(user_id=user_id, event_id=event_id)
#     db.session.add(new_ticket)
#     db.session.commit()

#     # Decrease the available tickets count for the event
#     event.tickets_available -= 1
#     db.session.commit()

#     return jsonify({'message': 'Tickets purchased successfully'}), 201



if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)

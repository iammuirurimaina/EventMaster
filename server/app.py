from flask import Flask, request, make_response, jsonify

from flask_migrate import Migrate

from models import db, Event

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///events.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False


migrate = Migrate(app, db)

db.init_app(app)

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

    return jsonify({
        'id': new_event.id,
        'name': new_event.name,
        'date': new_event.date,
        'location': new_event.location,
        'tickets_available': new_event.tickets_available,
        'image_url': new_event.image_url,
        'category': new_event.category
    })

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

    return jsonify(event_list)

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
        return jsonify(event_data)
    else:
        return jsonify({'message': 'Event not found'}), 404


# Update an Event
@app.route('/events/<int:event_id>', methods=['PATCH'])
def update_event(event_id):
    event = Event.query.get(event_id)

    if event:
        event.name = request.json['name']
        event.date = request.json['date']
        event.location = request.json['location']
        event.tickets_available = request.json['tickets_available']
        event.image_url = request.json.get('image_url', None)
        event.category = request.json['category']

        db.session.commit()

        event_data = {
            'id': event.id,
            'name': event.name,
            'date': event.date,
            'location': event.location,
            'tickets_available': event.tickets_available,
            'image_url': event.image_url,
            'category': event.category
        }

        return jsonify(event_data)
    else:
        return jsonify({'message': 'Event not found'}), 404
# Delete an Event
@app.route('/events/<int:event_id>', methods=['DELETE'])
def delete_event(event_id):
    event = Event.query.get(event_id)

    if event:
        db.session.delete(event)
        db.session.commit()
        return jsonify({'message': 'Event deleted successfully'})
    else:
        return jsonify({'message': 'Event not found'}), 404

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy_serializer import SerializerMixin



metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False, unique=True)
    password = db.Column(db.String, nullable=False)
    phone_number = db.Column(db.Integer)


# Event Model
class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), unique=True, nullable=False)
    date = db.Column(db.String, nullable=False)
    location = db.Column(db.String(255), nullable=False)
    tickets_available = db.Column(db.Integer, nullable=False)
    image_url = db.Column(db.String(255))
    category = db.Column(db.String(50), nullable=False)

    #relationships
    tickets = db.relationship('Ticket', backref='event', lazy=True)
   

    def __init__(self, name, date, location, tickets_available, image_url, category):
        self.name = name
        self.date = date
        self.location = location
        self.tickets_available = tickets_available
        self.image_url = image_url
        self.category = category

# Ticket Model
class Ticket(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)
    event_id = db.Column(db.Integer, db.ForeignKey('event.id'), nullable=False)
    price = db.Column(db.Integer, nullable=False)

    user = db.relationship('User', backref='tickets', lazy=True)
    






from app import app, db, Event

from datetime import datetime

def seed_data():
    with app.app_context():
        
        event1= Event(name='SautiSolFest', date=datetime(2023, 10, 20), location='Nairobi', tickets_available=200, image_url='/home/maina/Development/code/phase4/Phase4-project/server/Images/solfest.jpeg', category='Music')
        

        # Add data to the session and commit
        db.session.add(event1)
        

        db.session.commit()
if __name__ == '__main__':
    seed_data()

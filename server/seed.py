from app import app, db, Event

from datetime import datetime

def seed_data():
    with app.app_context():

        

        event3= Event(name='Happy Country', date="2023, 12, 16", location='KICC,Nairobi', tickets_available=6000, image_url='https://pbs.twimg.com/media/F4O8ZMtWgAE1ckY.jpg:large', category='Comedy')
        event4= Event(name='Big 5 Construct Kenya', date="2023, 11, 8", location='Sarit Expo Centre', tickets_available=80, image_url='https://www.thebig5constructkenya.com/wp-content/uploads/sites/2/2022/06/big5-kenya-logo-368px140p.png', category='Business')
        event5= Event(name='Virtual Software Conference', date="2023, 11, 15", location='Online', tickets_available=20, image_url='https://www.wildapricot.com/wp-content/uploads/2022/10/virtual-conference.png', category='Tech')
        event6= Event(name='Beneath the Baobabs', date="2023, 12, 29", location='BTB, Kilifi', tickets_available=500, image_url='https://media.licdn.com/dms/image/C4E0BAQG-gnYtjVwRfw/company-logo_200_200/0/1643706228047?e=2147483647&v=beta&t=5BTcpjULzvMwb3UeWIUgbRoF3C6TNGtpitLoZHikfWM', category='Music')
        event7= Event(name='TTNT', date="2023, 11, 10", location='KICC, Nairobi', tickets_available=2500, image_url='https://www.kenyamoja.com/sites/default/files/styles/width_500px/public/events/posters/336017351_1381898042595669_8764372910650750029_n.jpg?itok=fEd-lUsh', category='Comedy')
        event8= Event(name='Shin City', date="2023, 11, 21", location='Ngong Racecourse', tickets_available=250, image_url='https://ocdn.eu/images/pulscms/ZGI7MDA_/5316306a3bac21124788c957a4ecda0a.jpeg', category='Music')
        
        db.session.add(event3)
        db.session.add(event4)
        db.session.add(event5)
        db.session.add(event6)
        db.session.add(event7)
        db.session.add(event8)
        db.session.commit()
        
        
        


        
    # Add data to the session and commit
        
    

        db.session.commit()

    
if __name__ == '__main__':
    seed_data()
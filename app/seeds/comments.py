from app.models import db, Comment


# Adds a demo user, you can add other users here if you want
def seed_comments():
    comment1 = Comment(
        videoId=1, userId=1, comment='This is a demo comment')
    comment2 = Comment(
        videoId=1, userId=2, comment='This is a demo comment made by another user')    

    db.session.add(comment1)
    db.session.add(comment2)
    
    

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_comments():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()

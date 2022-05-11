from app.models import db, Video


# Adds a demo user, you can add other users here if you want
def seed_videos():
    video01 = Video(
        userId=1, title='Avatar 2', about='AVATAR 2: THE WAY OF WATER Trailer (2022) Sam Worthington, Sigourney Weaver, James Cameron, Sci-Fi Movie © 2022 - Disney / 20th Century Studios', video='https://youtubeclone-rami.s3.us-west-1.amazonaws.com/Videos/AVATAR+2+-+THE+WAY+OF+WATER+Trailer+(2022)+%5BNZrX_ES93JA%5D.mp4', thumbnail='https://youtubeclone-rami.s3.us-west-1.amazonaws.com/thumbnails/maxresdefault.jpeg')
    video02 = Video(
        userId=1, title='BLEACH - Thousand Year Blood War', about="Bleach: Thousand Year Blood War Arc' / 'Bleach: Sennen Kessen-hen' is the continuation of the anime 'Bleach (2004)', follows Ichigo Kurosaki and his Soul Reaper companions' battle against Yhwach with his despicable Quincy army. We all know that Bleach is one of the legendary top 3 shounen of all time back then, and suddenly it has been quiet for years. But now, the wait is over, the announcement for the revival of the  anime is worth to wait. After the Super Stage EX for the anime 'BLEACH' they revealed the 1st promotional video including the cast, staff, animation production and the first key visual of the anime at the JUMP FESTA 2022.  Studio Pierrot returns to animate the anime adaptation of the anime series and it will be scheduled for October next year!", video="https://youtubeclone-rami.s3.us-west-1.amazonaws.com/Videos/BLEACH+-+Thousand+Year+Blood+War+%E2%80%93+Official+Trailer+%5BiutQJzAXiWo%5D.mp4", thumbnail='https://youtubeclone-rami.s3.us-west-1.amazonaws.com/thumbnails/bleach.jpeg')
    video03 = Video(
        userId=1, title='House of the Dragon _ Official Teaser Trailer', about='History does not remember blood. It remembers names. August 21. #HouseoftheDragon', video='https://youtubeclone-rami.s3.us-west-1.amazonaws.com/Videos/House+of+the+Dragon+_+Official+Teaser+Trailer+_+HBO+Max+%5BWg86eQkdudI%5D.mp4', thumbnail='https://youtubeclone-rami.s3.us-west-1.amazonaws.com/thumbnails/hotd.jpeg')
    video04 = Video(
        userId=1, title='Jurassic World Dominion ', about='It all comes down to this. Watch the new trailer for #JurassicWorldDominion and get tickets now.', video='https://youtubeclone-rami.s3.us-west-1.amazonaws.com/Videos/Jurassic+World+Dominion+_+Trailer+2+%5BHD%5D+%5BDtQycgMD4HQ%5D.mp4', thumbnail='https://youtubeclone-rami.s3.us-west-1.amazonaws.com/thumbnails/jurras.jpeg')
    video05 = Video(
        userId=2, title='Lightyear _ Official Trailer 2', about="You know his name, now discover his story. On June 17, see Disney and Pixar’s #Lightyear, only in theaters.", video='https://youtubeclone-rami.s3.us-west-1.amazonaws.com/Videos/Lightyear+_+Official+Trailer+2+%5BwHBBoUtJHhA%5D.mp4', thumbnail='https://youtubeclone-rami.s3.us-west-1.amazonaws.com/thumbnails/light.jpeg')
    video06 = Video(
        userId=2, title="Marvel Studios' Doctor Strange in the Multiverse of Madness", about="Enter a new dimension of Strange. Watch the official trailer for Marvel Studios' Doctor Strange in the Multiverse of Madness. Only in theaters May 6.", video="https://youtubeclone-rami.s3.us-west-1.amazonaws.com/Videos/Marvel+Studios'+Doctor+Strange+in+the+Multiverse+of+Madness+_+Official+Trailer+%5BaWzlQ2N6qqg%5D.mp4", thumbnail='https://youtubeclone-rami.s3.us-west-1.amazonaws.com/thumbnails/mtom.jpeg')
    video07 = Video(
        userId=2, title='Obi-Wan Kenobi Official Trailer', about='The story begins 10 years after the dramatic events of “Star Wars: Revenge of the Sith” where Obi-Wan Kenobi faced his greatest defeat—the downfall and corruption of his best friend and Jedi apprentice, Anakin Skywalker, who turned to the dark side as evil Sith Lord Darth Vader.', video='https://youtubeclone-rami.s3.us-west-1.amazonaws.com/Videos/Obi-Wan+Kenobi+_+Official+Trailer+_+Disney%2B+%5B3Yh_6_zItPU%5D.mp4', thumbnail='https://youtubeclone-rami.s3.us-west-1.amazonaws.com/thumbnails/obi.jpeg')
    video08 = Video(
        userId=3, title='The Science of Extreme Time Dilation in Interstellar', about="For every one hour on the Miller's planet, time elapses roughly 7 years on Earth. How is that possible? In this fun video, we'll explore the science behind #Time #Dilation.", video='https://youtubeclone-rami.s3.us-west-1.amazonaws.com/Videos/The+Science+of+Extreme+Time+Dilation+in+Interstellar+%5BJqKa6qyVYgg%5D.mp4', thumbnail='https://youtubeclone-rami.s3.us-west-1.amazonaws.com/thumbnails/inter.webp')
    video09 = Video(
        userId=3, title='THOR 4 - Love and Thunder', about='#ThorLoveAndThunder #THOR4 #MarvelStudios', video='https://youtubeclone-rami.s3.us-west-1.amazonaws.com/Videos/THOR+4+-+Love+and+Thunder+-+NEW+TRAILER+(2022)+Marvel+Studios+%5BUEcooZpuaGk%5D.mp4', thumbnail='https://youtubeclone-rami.s3.us-west-1.amazonaws.com/thumbnails/thor.jpeg')
    video10 = Video(
        userId=3, title='Top Gun - Maverick', about='Guaranteed adrenaline rush. #TopGun: Maverick is FINALLY coming to theatres May 27. Watch the NEW official trailer now!', video='https://youtubeclone-rami.s3.us-west-1.amazonaws.com/Videos/Top+Gun+-+Maverick+_+NEW+Official+Trailer+(2022+Movie)+-+Tom+Cruise+%5BgiXco2jaZ_4%5D.mp4', thumbnail='https://youtubeclone-rami.s3.us-west-1.amazonaws.com/thumbnails/topgun.jpeg')

    db.session.add(video01)
    db.session.add(video02)
    db.session.add(video03)
    db.session.add(video04)
    db.session.add(video05)
    db.session.add(video06)
    db.session.add(video07)
    db.session.add(video08)
    db.session.add(video09)
    db.session.add(video10)
    

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_videos():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()

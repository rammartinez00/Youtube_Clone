from tokenize import String
from flask_wtf import FlaskForm
from wtforms import StringField, FileField
from wtforms.validators import DataRequired, Length

class VideoForm(FlaskForm):
    title = StringField('title')
    about = StringField('about')
    video = StringField('video')
    # thumbnail = StringField('thumbnail')
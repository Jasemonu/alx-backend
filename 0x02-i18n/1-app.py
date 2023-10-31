#!/usr/bin/env python3
"""set up of basic Flsk app"""

from flask import Flask, render_template
from flask_babel import Babel


class Config(object):
    """Config class"""
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONE = 'UTC'


# configure the flask app
app = Flask(__name__)
app.config.from_object(Config)
babel = Babel(app)


@app.route('/')
def index():
    """A route declaration"""
    return render_template('1-index.html')


if __name__ == '__main__':
    app.run()

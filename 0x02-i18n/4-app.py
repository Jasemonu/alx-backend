#!/usr/bin/env python3
"""set up of basic Flsk app"""

from flask import Flask, render_template, request
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


@babel.localeselector
def get_locale():
    """determines best match with our supported languages"""
    request_locale = request.args.get('locale')

    if request_locale and request_locale in app.config['LANGUAGES']:
        return request_locale

    return request.accept_languages.best_match(app.config['LANGUAGES'])


@app.route('/')
def index():
    """A route declaration"""
    return render_template('4-index.html')


if __name__ == '__main__':
    app.run()

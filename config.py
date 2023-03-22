from dotenv import load_dotenv
load_dotenv()

import os
OPEN_AI_KEY = os.getenv("OPEN_AI_KEY")


class Config(object):
    DEBUG = True
    TESTING = False

class DevelopmentConfig(Config):
    SECRET_KEY = "this-is-a-super-secret-key"
    OPENAI_KEY = OPEN_AI_KEY

config = {
    'development': DevelopmentConfig,
    'testing': DevelopmentConfig,
    'production': DevelopmentConfig
}

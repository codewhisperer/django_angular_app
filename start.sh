#!/bin/bash
current_dir=$(pwd)
cd static && npm i && bower install

# Return to where we started
cd "$current_dir"

# install django components
pip install -r requirements.txt

python manage.py migrate
python manage.py syncdb
python manage.py runserver

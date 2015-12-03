from django.conf.urls import patterns, include, url
from rest_framework import routers
from login.views import AccountViewSet, IndexView, LoginView, LogoutView
import logging

router = routers.SimpleRouter()
router.register(r'accounts', AccountViewSet)

log = logging.getLogger('someLogger')
log.setLevel(logging.DEBUG)
# create console handler with a higher log level
ch = logging.StreamHandler()
ch.setLevel(logging.DEBUG)
# create formatter and add it to the handlers
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
ch.setFormatter(formatter)
# add the handlers to the logger
log.addHandler(ch)
log.info(router.urls)



urlpatterns = patterns(
     '',
    url(r'^api/v1/', include(router.urls)),
    url(r'^api/v1/auth/login/$', LoginView.as_view(), name='login'),
    url(r'^api/v1/auth/logout/$', LogoutView.as_view(), name='logout'),
    url('^.*$', IndexView.as_view(), name='index'),
)

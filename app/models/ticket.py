from ferris import BasicModel, ndb
from google.appengine.api import mail, app_identity
APP_ID = app_identity.get_application_id()


class Ticket(BasicModel):
    event_id = ndb.StringProperty()
    scalper_name = ndb.StringProperty()
    event_name = ndb.StringProperty()
    event_description = ndb.StringProperty()
    schedule = ndb.StringProperty()
    section = ndb.StringProperty()
    quantity = ndb.IntegerProperty()
    price = ndb.FloatProperty()
    venue = ndb.StringProperty()

    @classmethod
    def list_all(cls):
        return cls.query()

    @classmethod
    def create(cls, params):
        item = cls()
        item.populate(**params)
        item.put()
        return item

    @classmethod
    def remove(cls):
        ndb.delete_multi(
            Ticket.query().fetch(keys_only=True)
        )

    # @staticmethod
    # def success_notification(selectedEmail, event_summary, event_link):

    #     subject = "Ticket Subject"
    #     body = """
    #      Hello,

    #         This notice is to let you know that "%s" the owner of the "%s" has been removed from our systems.
    #         Please review this event and make different plans if necessary.

    #         %s

    #     Thanks,
    #     Arista IT
    #     """ % (selectedEmail, event_summary, event_link)

    #     mail.send_mail(oauth_config['default_user'], notifications_recipient['email'], subject, body)
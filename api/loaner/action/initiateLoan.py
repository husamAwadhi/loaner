from .action import Action
from flask import jsonify
from werkzeug.wrappers import Response
import uuid


class InitiateLoan(Action):

    def action(self) -> Response:
        return jsonify(user_id=self.generate_user_id())

    def generate_user_id(self) -> str:
        id = uuid.uuid4()
        # todo: cache/store here
        return id

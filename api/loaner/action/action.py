from abc import ABC, abstractmethod
from werkzeug.wrappers import Response

class Action(ABC):
    
    @abstractmethod
    def action(self) -> Response:
        pass

import pytest


def helloTest():
    return "Hello world"


def test_hello():
    assert helloTest() == "Hello world"

def emailBuilder(first_name, last_name):
    return first_name.lower() + "." + last_name.lower() + "@evolveu.ca"


def test_emailBuilder():
    assert emailBuilder("Larry", "Shumlich") == "larry.shumlich@evolveu.ca"
    assert emailBuilder("Heiko", "Peters") == "heiko.peters@evolveu.ca"

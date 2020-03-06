import pytest

def emailBuilder(first_name, last_name):
    return first_name.lower() + "." + last_name.lower() + "@evolveu.ca"

def test_emailBuilder():
    assert emailBuilder("Larry", "Shumlich") == ""
     assert emailBuilder("Larry", "Shumlich") == ""

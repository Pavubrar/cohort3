from canTax import tax

def test_negetiveValues():
    assert tax(-99) == 0
def test_tax1():
    assert tax (1) == 0.15
def test_tax2():
    assert tax (2) == 0.3
def test_tax3():
    assert tax (50000) == 7630.85
def test_tax4():
    assert tax (100000) == 18140.66
def test_tax5():
    assert tax (150000) == 31211.57
def test_tax6():
    assert tax (250000) == 61796.57
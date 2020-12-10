lines = []


def load_data(fileName):
    global lines
    with open(fileName, "r") as input_data:
        lines = input_data.readlines()
    for i in range(len(lines)):
        lines[i] = lines[i].strip()


def myHelperFunction():
    global lines
    pass

def problemOne():
    global lines
    pass


  
    

def problemTwo():
    global lines
    pass

if __name__ == "__main__":
    #load_data("1")
    problemOne()
    problemTwo()
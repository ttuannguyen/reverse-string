string = "hello"

# def reverse(string):
#     for char in string:
#         print(char)

def reverse(string):
    size = len(string) - 1
    # print(size)

    # when working with index and iterating backward
    # size needs to be subtracted by 1
    # stop: Endpoint of the sequence. This item will not be included in the sequence.
    for i in range(size, -1, -1):
        print(string[i])



reverse(string)
from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')

def word_count(request):
    return render(request, 'word_count.html')


def result(request):
    entered_text = request.GET['fulltext']
    word_list = entered_text.split()

    word_dictionary = {}

    for word in word_list:
        if word in word_dictionary:
            word_dictionary[word] += 1
        else:
            word_dictionary[word] = 1

    #전체 단어 합계 구하기기
    total_word_count = sum(word_dictionary.values())
    
    return render(request, 'result.html', {'alltext':entered_text, 'dictionary':word_dictionary.items(), 'totalword':total_word_count})


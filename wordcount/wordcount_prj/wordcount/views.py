from django.shortcuts import render

# Create your views here.

def index(request):
  return render(request, 'index.html')

def word_count(request):
  return render(request, 'word_count.html')

def result(request):
  enterde_text = request.GET['fulltext'] #요청이 들어오면 fulltext를 가져와라 (사용자가 입력한 전체 텍스트를 get 방식으로 받아서 enterde_text에 저장)
  word_list = enterde_text.split() #entered_text를 공백 기준으로 문자열을 나누겠다 (단어 하나하나를 나눠서 word_list에 저장)

  word_dictionary = {}
#{word: 출현 횟수}로 만들어줌
  for word in word_list:
    if word in word_dictionary:
      word_dictionary[word] += 1
    else:
      word_dictionary[word] = 1
#result.html 에 변수 전달하기
  return render(request, 'result.html', {'alltext': enterde_text, 'dictionary':word_dictionary.items(), 'word_count':len(word_list)})
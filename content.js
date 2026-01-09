const ERROR_DATABASE = {
  highConfidence: {
    'teh': 'the', 'adn': 'and', 'taht': 'that', 'hte': 'the', 'nad': 'and', 'ont': 'not', 'si': 'is', 'fo': 'of', 'ot': 'to', 'int': 'in', 'ti': 'it', 'fo': 'for', 'whith': 'with', 'thsi': 'this', 'waht': 'what', 'thta': 'that', 'jsut': 'just', 'cna': 'can', 'ahve': 'have', 'nad': 'and', 'tath': 'that', 'oen': 'one', 'owuld': 'would', 'shoudl': 'should', 'coudl': 'could', 'woudl': 'would', 'wiht': 'with', 'thier': 'their', 'freind': 'friend', 'freinds': 'friends', 'wich': 'which', 'whcih': 'which', 'watn': 'want', 'wnat': 'want', 'yeild': 'yield', 'yoiu': 'you', 'yuor': 'your', 'recieve': 'receive', 'recieved': 'received', 'reciever': 'receiver', 'recieving': 'receiving', 'beleive': 'believe', 'beleived': 'believed', 'beleiver': 'believer', 'beleiving': 'believing', 'acheive': 'achieve', 'acheived': 'achieved', 'acheiving': 'achieving', 'acheivment': 'achievement', 'seperate': 'separate', 'seperated': 'separated', 'seperating': 'separating', 'seperation': 'separation', 'definately': 'definitely', 'definatly': 'definitely', 'defiantly': 'definitely', 'definetly': 'definitely', 'accomodate': 'accommodate', 'accomodated': 'accommodated', 'accomodating': 'accommodating', 'accomodation': 'accommodation', 'acomodate': 'accommodate', 'occured': 'occurred', 'occuring': 'occurring', 'occurence': 'occurrence', 'occurance': 'occurrence', 'goverment': 'government', 'govenment': 'government', 'govermental': 'governmental', 'enviroment': 'environment', 'enviornment': 'environment', 'enviromental': 'environmental', 'begining': 'beginning', 'beggining': 'beginning', 'begining': 'beginning', 'wierd': 'weird', 'wierdo': 'weirdo', 'untill': 'until', 'untl': 'until', 'dont': "don't", 'doesnt': "doesn't", 'didnt': "didn't", 'cant': "can't", 'wont': "won't", 'shouldnt': "shouldn't", 'couldnt': "couldn't", 'wouldnt': "wouldn't", 'hasnt': "hasn't", 'hadnt': "hadn't", 'havent': "haven't", 'isnt': "isn't", 'arent': "aren't", 'wasnt': "wasn't", 'werent': "weren't", 'whos': "who's", 'whats': "what's", 'wheres': "where's", 'whens': "when's", 'hows': "how's", 'thats': "that's", 'theres': "there's", 'heres': "here's", 'shes': "she's", 'hes': "he's", 'its': "it's", 'lets': "let's", 'theyre': "they're", 'youre': "you're", 'were': "we're", 'accomodate': 'accommodate', 'ackowledge': 'acknowledge', 'acquaintence': 'acquaintance', 'adress': 'address', 'agressive': 'aggressive', 'apparant': 'apparent', 'apparantly': 'apparently', 'appearence': 'appearance', 'Carribean': 'Caribbean', 'catagory': 'category', 'collegue': 'colleague', 'comming': 'coming', 'commitee': 'committee', 'concious': 'conscious', 'concensus': 'consensus', 'consistant': 'consistent', 'curiousity': 'curiosity', 'definite': 'definite', 'dilema': 'dilemma', 'disapear': 'disappear', 'dissapoint': 'disappoint', 'embarass': 'embarrass', 'existance': 'existence', 'explaination': 'explanation', 'familar': 'familiar', 'finaly': 'finally', 'flourescent': 'fluorescent', 'foriegn': 'foreign', 'fourty': 'forty', 'foward': 'forward', 'freind': 'friend', 'goverment': 'government', 'grammer': 'grammar', 'greatful': 'grateful', 'gaurd': 'guard', 'harass': 'harass', 'heighth': 'height', 'heirarchy': 'hierarchy', 'humourous': 'humorous', 'hygeine': 'hygiene', 'ignorence': 'ignorance', 'immediatly': 'immediately', 'incidently': 'incidentally', 'independant': 'independent', 'indispensible': 'indispensable', 'innoculate': 'inoculate', 'inteligence': 'intelligence', 'intrested': 'interested', 'irrelevant': 'irrelevant', 'jewelery': 'jewelry', 'judgement': 'judgment', 'knowlege': 'knowledge', 'liason': 'liaison', 'libary': 'library', 'licence': 'license', 'lieing': 'lying', 'lightening': 'lightning', 'maintenence': 'maintenance', 'millenium': 'millennium', 'millionnaire': 'millionaire', 'minature': 'miniature', 'mischevious': 'mischievous', 'misspell': 'misspell', 'necesary': 'necessary', 'neccessary': 'necessary', 'noticable': 'noticeable', 'occassion': 'occasion', 'occassional': 'occasional', 'occured': 'occurred', 'omision': 'omission', 'oppurtunity': 'opportunity', 'outragous': 'outrageous', 'parrallel': 'parallel', 'parliment': 'parliament', 'pastime': 'pastime', 'pavillion': 'pavilion', 'peculier': 'peculiar', 'percieve': 'perceive', 'perserverance': 'perseverance', 'personaly': 'personally', 'peice': 'piece', 'politican': 'politician', 'posession': 'possession', 'potatos': 'potatoes', 'practicaly': 'practically', 'preceed': 'precede', 'prefered': 'preferred', 'privelege': 'privilege', 'probaly': 'probably', 'profesional': 'professional', 'prominant': 'prominent', 'pronounciation': 'pronunciation', 'publically': 'publicly', 'questionaire': 'questionnaire', 'readible': 'readable', 'realy': 'really', 'reccomend': 'recommend', 'refered': 'referred', 'relevent': 'relevant', 'religous': 'religious', 'rememberance': 'remembrance', 'repitition': 'repetition', 'resistence': 'resistance', 'responsability': 'responsibility', 'restaraunt': 'restaurant', 'rythm': 'rhythm', 'sargeant': 'sergeant', 'scedule': 'schedule', 'scisor': 'scissors', 'secretery': 'secretary', 'seige': 'siege', 'seperate': 'separate', 'sieze': 'seize', 'similiar': 'similar', 'sinceerly': 'sincerely', 'speach': 'speech', 'succesful': 'successful', 'supercede': 'supersede', 'surprize': 'surprise', 'temperture': 'temperature', 'tendancy': 'tendency', 'therefor': 'therefore', 'threshhold': 'threshold', 'tommorow': 'tomorrow', 'tounge': 'tongue', 'truely': 'truly', 'twelfth': 'twelfth', 'tyrany': 'tyranny', 'underate': 'underrate', 'untill': 'until', 'unuseual': 'unusual', 'useable': 'usable', 'vaccuum': 'vacuum', 'vegtable': 'vegetable', 'vehical': 'vehicle', 'visable': 'visible', 'wellcome': 'welcome', 'wheather': 'whether', 'wilfull': 'willful', 'withold': 'withhold', 'absolutly': 'absolutely', 'accidently': 'accidentally', 'accordian': 'accordion', 'acheivment': 'achievement', 'acrossed': 'across', 'actualy': 'actually', 'agression': 'aggression', 'alledge': 'allege', 'alright': 'all right', 'alusion': 'allusion', 'amatuer': 'amateur', 'aniversary': 'anniversary', 'annoint': 'anoint', 'annoucement': 'announcement', 'anual': 'annual', 'apauling': 'appalling', 'apeal': 'appeal', 'appearence': 'appearance', 'aquire': 'acquire', 'arguement': 'argument', 'assasination': 'assassination', 'athelete': 'athlete', 'athiest': 'atheist', 'basicly': 'basically', 'begger': 'beggar', 'beleif': 'belief', 'benifit': 'benefit', 'bouy': 'buoy', 'breif': 'brief', 'buisness': 'business', 'calander': 'calendar', 'camoflage': 'camouflage', 'campain': 'campaign', 'cancellation': 'cancellation', 'carefull': 'careful', 'catagory': 'category', 'cauhgt': 'caught', 'cemetary': 'cemetery', 'cemetry': 'cemetery', 'changable': 'changeable', 'cheif': 'chief', 'chocoloate': 'chocolate', 'cieling': 'ceiling', 'colleage': 'colleague', 'collectable': 'collectible', 'colledge': 'college', 'colleger': 'colleague', 'compitition': 'competition', 'conceed': 'concede', 'congradulate': 'congratulate', 'conquer': 'conquer', 'consentrate': 'concentrate', 'contraversy': 'controversy', 'conveinence': 'convenience', 'coperate': 'cooperate', 'corparate': 'corporate', 'correspondance': 'correspondence', 'critisism': 'criticism', 'critize': 'criticize', 'crystle': 'crystal', 'dacquiri': 'daiquiri', 'decaffienated': 'decaffeinated', 'decieve': 'deceive', 'decison': 'decision', 'defendent': 'defendant', 'definantly': 'definitely', 'desparate': 'desperate', 'deterant': 'deterrent', 'develope': 'develop', 'diffrent': 'different', 'dilevery': 'delivery', 'dinning': 'dining', 'disapear': 'disappear', 'disasterous': 'disastrous', 'discribe': 'describe', 'disipline': 'discipline', 'drunkeness': 'drunkenness', 'ecstacy': 'ecstasy', 'eigth': 'eighth', 'electic': 'eclectic', 'embarrased': 'embarrassed', 'emmisary': 'emissary', 'emphsis': 'emphasis', 'enviorment': 'environment', 'equiptment': 'equipment', 'exagerate': 'exaggerate', 'excellant': 'excellent', 'excercise': 'exercise', 'exilerate': 'exhilarate', 'existance': 'existence', 'experament': 'experiment', 'extrodinary': 'extraordinary', 'facination': 'fascination', 'familier': 'familiar', 'fasinating': 'fascinating', 'febuary': 'February', 'firey': 'fiery', 'flourescent': 'fluorescent', 'forcast': 'forecast', 'forfit': 'forfeit', 'forunate': 'fortunate', 'fourty': 'forty', 'freind': 'friend', 'frustraited': 'frustrated', 'fulfil': 'fulfill', 'fundemental': 'fundamental', 'garantee': 'guarantee', 'gaurantee': 'guarantee', 'geneology': 'genealogy', 'generaly': 'generally', 'genius': 'genius', 'goverment': 'government', 'gratefull': 'grateful', 'greif': 'grief', 'grievence': 'grievance', 'harrass': 'harass', 'haveing': 'having', 'heirarchy': 'hierarchy', 'herosim': 'heroism', 'heros': 'heroes', 'hopfully': 'hopefully', 'humerous': 'humorous', 'hygeine': 'hygiene', 'hipocrit': 'hypocrite', 'ideosyncracy': 'idiosyncrasy', 'ilegible': 'illegible', 'immitate': 'imitate', 'imediate': 'immediate', 'independance': 'independence', 'indispensable': 'indispensable', 'innoculate': 'inoculate', 'inteligent': 'intelligent', 'intresting': 'interesting', 'irresistable': 'irresistible', 'jist': 'gist', 'knowlege': 'knowledge', 'labratory': 'laboratory', 'leasure': 'leisure', 'lenght': 'length', 'liason': 'liaison', 'lisence': 'license', 'liutenant': 'lieutenant', 'lonelyness': 'loneliness', 'maintainance': 'maintenance', 'managable': 'manageable', 'maneuver': 'maneuver', 'marrige': 'marriage', 'marshmellow': 'marshmallow', 'medacine': 'medicine', 'medeval': 'medieval', 'medeival': 'medieval', 'memento': 'memento', 'mileau': 'milieu', 'millenium': 'millennium', 'miniature': 'miniature', 'mischievious': 'mischievous', 'mispell': 'misspell', 'momento': 'memento', 'monkies': 'monkeys', 'morgage': 'mortgage', 'mountian': 'mountain', 'naturaly': 'naturally', 'neccessarily': 'necessarily', 'neice': 'niece', 'nieghbor': 'neighbor', 'nineth': 'ninth', 'noticable': 'noticeable', 'obediance': 'obedience', 'ocasion': 'occasion', 'ocassion': 'occasion', 'occassion': 'occasion', 'occurance': 'occurrence', 'offence': 'offense', 'ommision': 'omission', 'oponent': 'opponent', 'oportunity': 'opportunity', 'orignal': 'original', 'outragous': 'outrageous', 'overun': 'overrun', 'parrallel': 'parallel', 'parellel': 'parallel', 'parlament': 'parliament', 'particulary': 'particularly', 'passtime': 'pastime', 'pavillion': 'pavilion', 'percieve': 'perceive', 'perogative': 'prerogative', 'perseverance': 'perseverance', 'personel': 'personnel', 'pichure': 'picture', 'peice': 'piece', 'plagerism': 'plagiarism', 'playright': 'playwright', 'plesant': 'pleasant', 'politness': 'politeness', 'posess': 'possess', 'potatos': 'potatoes', 'practicle': 'practical', 'preceed': 'precede', 'prefered': 'preferred', 'prejedice': 'prejudice', 'presance': 'presence', 'privelege': 'privilege', 'probaly': 'probably', 'procedger': 'procedure', 'professer': 'professor', 'promiss': 'promise', 'pronounciation': 'pronunciation', 'propoganda': 'propaganda', 'protien': 'protein', 'psycology': 'psychology', 'publically': 'publicly', 'quanity': 'quantity', 'quarentine': 'quarantine', 'questionaire': 'questionnaire', 'reccede': 'recede', 'reccommend': 'recommend', 'recieve': 'receive', 'reconize': 'recognize', 'recomend': 'recommend', 'referal': 'referral', 'refered': 'referred', 'refrence': 'reference', 'religous': 'religious', 'rememberance': 'remembrance', 'repitition': 'repetition', 'restarant': 'restaurant', 'rediculous': 'ridiculous', 'rythm': 'rhythm', 'sacrefice': 'sacrifice', 'saftey': 'safety', 'sattelite': 'satellite', 'schedual': 'schedule', 'scisor': 'scissors', 'secratary': 'secretary', 'seige': 'siege', 'sence': 'sense', 'seperate': 'separate', 'sergant': 'sergeant', 'sieze': 'seize', 'similer': 'similar', 'sinceerly': 'sincerely', 'sking': 'skiing', 'sociaty': 'society', 'solemly': 'solemnly', 'sophmore': 'sophomore', 'speach': 'speech', 'strenght': 'strength', 'succede': 'succeed', 'succesful': 'successful', 'supercede': 'supersede', 'suprise': 'surprise', 'surley': 'surely', 'tempermental': 'temperamental', 'tendancy': 'tendency', 'therfor': 'therefore', 'threshhold': 'threshold', 'tomatos': 'tomatoes', 'tommorow': 'tomorrow', 'tounge': 'tongue', 'transfered': 'transferred', 'truely': 'truly', 'twelvth': 'twelfth', 'tyrany': 'tyranny', 'underate': 'underrate', 'unfortunatly': 'unfortunately', 'untill': 'until', 'unuseual': 'unusual', 'upholstry': 'upholstery', 'usefull': 'useful', 'usualy': 'usually', 'vaccuum': 'vacuum', 'valueable': 'valuable', 'varient': 'variant', 'vegitable': 'vegetable', 'visious': 'vicious', 'villian': 'villain', 'visable': 'visible', 'wensday': 'Wednesday', 'wellfare': 'welfare', 'wheather': 'weather', 'wether': 'whether', 'withold': 'withhold', 'writting': 'writing', 'writen': 'written', 'yeild': 'yield', 'absense': 'absence', 'acceptible': 'acceptable', 'accidant': 'accident', 'accross': 'across', 'adaquate': 'adequate', 'addopt': 'adopt', 'advertisment': 'advertisement', 'advise': 'advice', 'againt': 'against', 'allegaince': 'allegiance', 'allmost': 'almost', 'allready': 'already', 'almsot': 'almost', 'alot': 'a lot', 'alright': 'all right', 'altho': 'although', 'alway': 'always', 'amature': 'amateur', 'ammount': 'amount', 'amoung': 'among', 'analogeous': 'analogous', 'analize': 'analyze', 'anounce': 'announce', 'anualy': 'annually', 'aparent': 'apparent', 'appartment': 'apartment', 'appart': 'apart', 'aquaintance': 'acquaintance', 'aquire': 'acquire', 'arguement': 'argument', 'arised': 'arose', 'arround': 'around', 'artifical': 'artificial', 'asthetic': 'aesthetic', 'athelet': 'athlete', 'attatch': 'attach', 'attemp': 'attempt', 'attendence': 'attendance', 'autor': 'author', 'awfull': 'awful', 'ballance': 'balance', 'basicly': 'basically', 'beacuse': 'because', 'becuase': 'because', 'becuse': 'because', 'beeing': 'being', 'begining': 'beginning', 'beleive': 'believe', 'belive': 'believe', 'benificial': 'beneficial', 'benifit': 'benefit', 'beteen': 'between', 'breif': 'brief', 'briliant': 'brilliant', 'buisness': 'business', 'calandar': 'calendar', 'calender': 'calendar', 'carefull': 'careful', 'catagory': 'category', 'cauhgt': 'caught', 'certin': 'certain', 'challange': 'challenge', 'charactor': 'character', 'cheif': 'chief', 'choise': 'choice', 'cieling': 'ceiling', 'circut': 'circuit', 'comany': 'company', 'comitted': 'committed', 'comlete': 'complete', 'concious': 'conscious', 'continous': 'continuous', 'copywrite': 'copyright', 'corse': 'course', 'corosion': 'corrosion', 'cousen': 'cousin', 'critecize': 'criticize', 'curcuit': 'circuit', 'dealling': 'dealing', 'decison': 'decision', 'descision': 'decision', 'decribe': 'describe', 'definitly': 'definitely', 'desicion': 'decision', 'developement': 'development', 'devide': 'divide', 'differance': 'difference', 'diffrent': 'different', 'dimentional': 'dimensional', 'disapear': 'disappear', 'dissapear': 'disappear', 'disapoint': 'disappoint', 'disasterous': 'disastrous', 'discribe': 'describe', 'disese': 'disease', 'dispite': 'despite', 'divison': 'division', 'doller': 'dollar', 'dominaton': 'domination', 'driveing': 'driving', 'droped': 'dropped', 'durring': 'during', 'easly': 'easily', 'eceonomy': 'economy', 'eigth': 'eighth', 'embarass': 'embarrass', 'embaress': 'embarrass', 'emmisary': 'emissary', 'emphsis': 'emphasis', 'employe': 'employee', 'encouragement': 'encouragement', 'enourmous': 'enormous', 'envirment': 'environment', 'equiptment': 'equipment', 'esential': 'essential', 'etablish': 'establish', 'eventualy': 'eventually', 'evidentally': 'evidently', 'exagerate': 'exaggerate', 'exampt': 'exempt', 'excede': 'exceed', 'excellance': 'excellence', 'exellent': 'excellent', 'exept': 'except', 'excercise': 'exercise', 'exersize': 'exercise', 'existance': 'existence', 'experiance': 'experience', 'expence': 'expense', 'experiement': 'experiment', 'explaination': 'explanation', 'facination': 'fascination', 'familar': 'familiar', 'famouse': 'famous', 'farenheit': 'Fahrenheit', 'fatel': 'fatal', 'favourit': 'favorite', 'feasable': 'feasible', 'febuary': 'February', 'fianlly': 'finally', 'finacial': 'financial', 'finaly': 'finally', 'forcast': 'forecast', 'forhead': 'forehead', 'foriegn': 'foreign', 'formaly': 'formally', 'fourty': 'forty', 'foward': 'forward', 'freind': 'friend', 'freinds': 'friends', 'frome': 'from', 'fullfil': 'fulfill', 'fundemental': 'fundamental', 'genaral': 'general', 'generaly': 'generally', 'goverment': 'government', 'govement': 'government', 'graet': 'great', 'gaurd': 'guard', 'garantee': 'guarantee', 'guidence': 'guidance', 'happyness': 'happiness', 'harrass': 'harass', 'haveing': 'having', 'healthercare': 'healthcare', 'heirarchy': 'hierarchy', 'heroe': 'hero', 'heros': 'heroes', 'hieght': 'height', 'higer': 'higher', 'honerable': 'honorable', 'hopeing': 'hoping', 'humerous': 'humorous', 'hygeine': 'hygiene', 'hypocracy': 'hypocrisy', 'idiosyncracy': 'idiosyncrasy', 'ignorence': 'ignorance', 'imagin': 'imagine', 'immediatly': 'immediately', 'importent': 'important', 'impossable': 'impossible', 'improvment': 'improvement', 'inadvertant': 'inadvertent', 'incidently': 'incidentally', 'independant': 'independent', 'indispensible': 'indispensable', 'influance': 'influence', 'innoculate': 'inoculate', 'inteligence': 'intelligence', 'intresting': 'interesting', 'irregardless': 'regardless', 'irresistable': 'irresistible', 'iland': 'island', 'juge': 'judge', 'knowlege': 'knowledge', 'labled': 'labeled', 'labratory': 'laboratory', 'laguage': 'language', 'largly': 'largely', 'liesure': 'leisure', 'lenght': 'length', 'liason': 'liaison', 'libary': 'library', 'lisense': 'license', 'lightening': 'lightning', 'lonelyness': 'loneliness', 'maintenence': 'maintenance', 'managment': 'management', 'marrige': 'marriage', 'mathamatics': 'mathematics', 'medevil': 'medieval', 'ment': 'meant', 'millitary': 'military', 'minature': 'miniature', 'mischievious': 'mischievous', 'mispell': 'misspell', 'momento': 'memento', 'monkies': 'monkeys', 'morgage': 'mortgage', 'mountian': 'mountain', 'naturaly': 'naturally', 'neccesary': 'necessary', 'neice': 'niece', 'nieghbor': 'neighbor', 'nineth': 'ninth', 'noticable': 'noticeable', 'ocasion': 'occasion', 'occassion': 'occasion', 'occured': 'occurred', 'offical': 'official', 'oposite': 'opposite', 'oppinion': 'opinion', 'oportunity': 'opportunity', 'opthamologist': 'ophthalmologist', 'orignal': 'original', 'outragous': 'outrageous', 'overal': 'overall', 'paralel': 'parallel', 'parlament': 'parliament', 'particulaly': 'particularly', 'passtime': 'pastime', 'paticular': 'particular', 'pavillion': 'pavilion', 'peice': 'piece', 'percieve': 'perceive', 'perfomance': 'performance', 'perhapse': 'perhaps', 'permanant': 'permanent', 'permision': 'permission', 'persue': 'pursue', 'personaly': 'personally', 'personel': 'personnel', 'perspctive': 'perspective', 'persuade': 'persuade', 'pichure': 'picture', 'peice': 'piece', 'plagerize': 'plagiarize', 'playright': 'playwright', 'poeple': 'people', 'politican': 'politician', 'posession': 'possession', 'possable': 'possible', 'practicaly': 'practically', 'preceed': 'precede', 'prefered': 'preferred', 'pregnent': 'pregnant', 'preist': 'priest', 'presance': 'presence', 'presense': 'presence', 'privelege': 'privilege', 'probaly': 'probably', 'problably': 'probably', 'proceedure': 'procedure', 'profesional': 'professional', 'professer': 'professor', 'promiss': 'promise', 'pronounciation': 'pronunciation', 'propoganda': 'propaganda', 'protien': 'protein', 'proove': 'prove', 'pscyhology': 'psychology', 'publically': 'publicly', 'purfume': 'perfume', 'pursuade': 'persuade', 'quanity': 'quantity', 'quarentine': 'quarantine', 'questionaire': 'questionnaire', 'readible': 'readable', 'realy': 'really', 'realise': 'realize', 'reccomend': 'recommend', 'recieve': 'receive', 'reconize': 'recognize', 'recomend': 'recommend', 'refered': 'referred', 'refrence': 'reference', 'rehersal': 'rehearsal', 'relevent': 'relevant', 'religous': 'religious', 'remeber': 'remember', 'remembrence': 'remembrance', 'repitition': 'repetition', 'representive': 'representative', 'resaurant': 'restaurant', 'resistence': 'resistance', 'responsability': 'responsibility', 'restaraunt': 'restaurant', 'resteraunt': 'restaurant', 'reveiw': 'review', 'rythm': 'rhythm', 'rythem': 'rhythm', 'sacrefice': 'sacrifice', 'safty': 'safety', 'sargent': 'sergeant', 'sattelite': 'satellite', 'scedule': 'schedule', 'sence': 'sense', 'seperate': 'separate', 'sargant': 'sergeant', 'seriouse': 'serious', 'severley': 'severely', 'sieze': 'seize', 'significence': 'significance', 'similer': 'similar', 'similiar': 'similar', 'sinceerly': 'sincerely', 'skillfull': 'skillful', 'somthing': 'something', 'sophmore': 'sophomore', 'speach': 'speech', 'statment': 'statement', 'strenght': 'strength', 'studing': 'studying', 'studnet': 'student', 'sucess': 'success', 'succede': 'succeed', 'succesful': 'successful', 'supercede': 'supersede', 'suprise': 'surprise', 'surley': 'surely', 'sylabus': 'syllabus', 'temperture': 'temperature', 'temprary': 'temporary', 'tendancy': 'tendency', 'termoil': 'turmoil', 'theif': 'thief', 'therefor': 'therefore', 'therfore': 'therefore', 'thier': 'their', 'threshhold': 'threshold', 'throughly': 'thoroughly', 'tomatos': 'tomatoes', 'tommorow': 'tomorrow', 'tounge': 'tongue', 'towrad': 'toward', 'traditonal': 'traditional', 'transfered': 'transferred', 'truely': 'truly', 'twelth': 'twelfth', 'tyrany': 'tyranny', 'underate': 'underrate', 'unfortunatly': 'unfortunately', 'uniq': 'unique', 'univercity': 'university', 'unnecesary': 'unnecessary', 'untill': 'until', 'upcomming': 'upcoming', 'useing': 'using', 'usefull': 'useful', 'usualy': 'usually', 'vaccuum': 'vacuum', 'valueable': 'valuable', 'varient': 'variant', 'vegatarian': 'vegetarian', 'vehical': 'vehicle', 'visable': 'visible', 'villian': 'villain', 'visious': 'vicious', 'wensday': 'Wednesday', 'wellfare': 'welfare', 'weild': 'wield', 'whant': 'want', 'wheather': 'weather', 'wheter': 'whether', 'wether': 'whether', 'witheld': 'withheld', 'withold': 'withhold', 'writting': 'writing', 'writen': 'written', 'yeild': 'yield', 'yatch': 'yacht'
  },
  lowConfidence: {
    'alot': ['a lot'], 'aswell': ['as well'], 'everytime': ['every time'], 'inorder': ['in order'], 'eachother': ['each other'], 'neverthless': ['nevertheless'], 'basicly': ['basically'], 'probly': ['probably'], 'realy': ['really'], 'finaly': ['finally'], 'actualy': ['actually'], 'generaly': ['generally'], 'specialy': ['specially', 'especially'], 'experiance': ['experience'], 'managment': ['management'], 'occassion': ['occasion'], 'sucessful': ['successful'], 'neccessary': ['necessary']
  }
};

let settings = { autoCorrectEnabled: true };
let tooltip = null;
const activeErrors = new WeakMap();
let debounceTimer = null;
const DEBOUNCE_DELAY = 300;

function init() {
  chrome.storage.sync.get(['autoCorrectEnabled'], (result) => {
    if (result.autoCorrectEnabled !== undefined) {
      settings.autoCorrectEnabled = result.autoCorrectEnabled;
    }
  });
  createTooltip();
  chrome.storage.onChanged.addListener((changes) => {
    if (changes.autoCorrectEnabled) {
      settings.autoCorrectEnabled = changes.autoCorrectEnabled.newValue;
    }
  });
  attachListeners();
  observeDOMChanges();
}

function createTooltip() {
  tooltip = document.createElement('div');
  tooltip.className = 'grammar-assistant-tooltip';
  tooltip.style.display = 'none';
  document.body.appendChild(tooltip);
}

function attachListeners() {
  const inputs = document.querySelectorAll('input[type="text"], input[type="search"], input[type="email"], textarea');
  inputs.forEach(element => {
    if (!element.dataset.grammarAssistantAttached) {
      element.addEventListener('input', handleInput);
      element.dataset.grammarAssistantAttached = 'true';
    }
  });
  const editables = document.querySelectorAll('[contenteditable="true"]');
  editables.forEach(element => {
    if (!element.dataset.grammarAssistantAttached) {
      element.addEventListener('input', handleContentEditableInput);
      element.addEventListener('blur', handleContentEditableBlur);
      element.dataset.grammarAssistantAttached = 'true';
    }
  });
}

function observeDOMChanges() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          if (isInputElement(node)) {
            attachListenerToElement(node);
          }
          const inputs = node.querySelectorAll('input[type="text"], input[type="search"], input[type="email"], textarea, [contenteditable="true"]');
          inputs.forEach(attachListenerToElement);
        }
      });
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

function isInputElement(element) {
  const tagName = element.tagName?.toLowerCase();
  return (
    (tagName === 'input' && ['text', 'search', 'email'].includes(element.type)) ||
    tagName === 'textarea' ||
    element.getAttribute('contenteditable') === 'true'
  );
}

function attachListenerToElement(element) {
  if (element.dataset.grammarAssistantAttached) return;
  if (element.getAttribute('contenteditable') === 'true') {
    element.addEventListener('input', handleContentEditableInput);
    element.addEventListener('blur', handleContentEditableBlur);
  } else {
    element.addEventListener('input', handleInput);
  }
  element.dataset.grammarAssistantAttached = 'true';
}

function handleInput(event) {
  const element = event.target;
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    checkAndCorrectText(element);
  }, DEBOUNCE_DELAY);
}

function handleContentEditableInput(event) {
  const element = event.target;
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    checkAndCorrectContentEditable(element);
  }, DEBOUNCE_DELAY);
}

function handleContentEditableBlur(event) {
  setTimeout(() => {
    hideTooltip();
  }, 200);
}

function checkAndCorrectText(element) {
  let text = element.value;
  let cursorPosition = element.selectionStart;
  let correctionsMade = false;
  if (settings.autoCorrectEnabled) {
    for (const [error, correction] of Object.entries(ERROR_DATABASE.highConfidence)) {
      const regex = new RegExp(`\\b${error}\\b`, 'gi');
      const newText = text.replace(regex, (match) => {
        correctionsMade = true;
        return preserveCase(match, correction);
      });
      if (newText !== text) {
        const diff = newText.length - text.length;
        text = newText;
        cursorPosition += diff;
      }
    }
    if (correctionsMade) {
      element.value = text;
      element.setSelectionRange(cursorPosition, cursorPosition);
    }
  }
}

function checkAndCorrectContentEditable(element) {
  const selection = window.getSelection();
  const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
  const cursorOffset = range ? range.startOffset : 0;
  const cursorNode = range ? range.startContainer : null;
  let textContent = element.textContent;
  let modified = false;
  removeErrorHighlights(element);
  if (settings.autoCorrectEnabled) {
    for (const [error, correction] of Object.entries(ERROR_DATABASE.highConfidence)) {
      const regex = new RegExp(`\\b${error}\\b`, 'gi');
      if (regex.test(textContent)) {
        textContent = textContent.replace(regex, (match) => preserveCase(match, correction));
        modified = true;
      }
    }
    if (modified) {
      updateContentEditableText(element, textContent);
    }
  }
  highlightErrors(element);
  if (range && cursorNode) {
    try {
      const newRange = document.createRange();
      const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
      let node;
      let offset = 0;
      while ((node = walker.nextNode())) {
        const nodeLength = node.textContent.length;
        if (offset + nodeLength >= cursorOffset) {
          newRange.setStart(node, Math.min(cursorOffset - offset, nodeLength));
          newRange.collapse(true);
          selection.removeAllRanges();
          selection.addRange(newRange);
          break;
        }
        offset += nodeLength;
      }
    } catch (e) {}
  }
}

function updateContentEditableText(element, newText) {
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  let node;
  while ((node = walker.nextNode())) {
    textNodes.push(node);
  }
  const oldText = textNodes.map(n => n.textContent).join('');
  if (oldText === newText) return;
  if (textNodes.length > 0) {
    textNodes[0].textContent = newText;
    for (let i = 1; i < textNodes.length; i++) {
      textNodes[i].textContent = '';
    }
  } else {
    element.textContent = newText;
  }
}

function highlightErrors(element) {
  const text = element.textContent;
  const words = text.split(/\b/);
  const errors = [];
  let position = 0;
  words.forEach(word => {
    const lowerWord = word.toLowerCase();
    if (ERROR_DATABASE.lowConfidence[lowerWord]) {
      errors.push({
        word: word,
        position: position,
        length: word.length,
        suggestions: ERROR_DATABASE.lowConfidence[lowerWord]
      });
    }
    position += word.length;
  });
  if (errors.length > 0) {
    applyHighlights(element, errors);
  }
}

function applyHighlights(element, errors) {
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  let node;
  while ((node = walker.nextNode())) {
    if (node.parentElement?.classList?.contains('grammar-error')) continue;
    textNodes.push(node);
  }
  let globalOffset = 0;
  textNodes.forEach(textNode => {
    const text = textNode.textContent;
    const nodeStart = globalOffset;
    const nodeEnd = globalOffset + text.length;
    const relevantErrors = errors.filter(error => {
      const errorStart = error.position;
      const errorEnd = error.position + error.length;
      return errorStart < nodeEnd && errorEnd > nodeStart;
    });
    if (relevantErrors.length > 0) {
      wrapErrorsInTextNode(textNode, relevantErrors, nodeStart);
    }
    globalOffset += text.length;
  });
}

function wrapErrorsInTextNode(textNode, errors, nodeOffset) {
  const text = textNode.textContent;
  const parent = textNode.parentNode;
  const fragments = [];
  let lastIndex = 0;
  errors.forEach(error => {
    const localStart = Math.max(0, error.position - nodeOffset);
    const localEnd = Math.min(text.length, error.position + error.length - nodeOffset);
    if (localStart >= lastIndex && localEnd <= text.length) {
      if (localStart > lastIndex) {
        fragments.push(document.createTextNode(text.substring(lastIndex, localStart)));
      }
      const errorSpan = document.createElement('span');
      errorSpan.className = 'grammar-error';
      errorSpan.textContent = text.substring(localStart, localEnd);
      errorSpan.dataset.suggestions = JSON.stringify(error.suggestions);
      errorSpan.addEventListener('mouseenter', showTooltipForError);
      errorSpan.addEventListener('mouseleave', hideTooltip);
      errorSpan.addEventListener('click', applySuggestion);
      fragments.push(errorSpan);
      lastIndex = localEnd;
    }
  });
  if (lastIndex < text.length) {
    fragments.push(document.createTextNode(text.substring(lastIndex)));
  }
  if (fragments.length > 0) {
    fragments.forEach(fragment => {
      parent.insertBefore(fragment, textNode);
    });
    parent.removeChild(textNode);
  }
}

function removeErrorHighlights(element) {
  const errorSpans = element.querySelectorAll('.grammar-error');
  errorSpans.forEach(span => {
    const text = span.textContent;
    const textNode = document.createTextNode(text);
    span.parentNode.replaceChild(textNode, span);
  });
  element.normalize();
}

function showTooltipForError(event) {
  const errorSpan = event.target;
  const suggestions = JSON.parse(errorSpan.dataset.suggestions);
  if (!suggestions || suggestions.length === 0) return;
  const rect = errorSpan.getBoundingClientRect();
  tooltip.style.left = rect.left + window.scrollX + 'px';
  tooltip.style.top = (rect.bottom + window.scrollY + 5) + 'px';
  tooltip.innerHTML = `
    <div class="tooltip-header">Did you mean?</div>
    <div class="tooltip-suggestions">
      ${suggestions.map(s => `<div class="tooltip-suggestion" data-suggestion="${s}">${s}</div>`).join('')}
    </div>
  `;
  tooltip.querySelectorAll('.tooltip-suggestion').forEach(suggestionDiv => {
    suggestionDiv.addEventListener('click', () => {
      const suggestion = suggestionDiv.dataset.suggestion;
      errorSpan.textContent = suggestion;
      errorSpan.classList.remove('grammar-error');
      hideTooltip();
    });
  });
  tooltip.style.display = 'block';
}

function hideTooltip() {
  if (tooltip) {
    tooltip.style.display = 'none';
  }
}

function applySuggestion(event) {
  const errorSpan = event.target;
  const suggestions = JSON.parse(errorSpan.dataset.suggestions);
  if (suggestions && suggestions.length > 0) {
    errorSpan.textContent = suggestions[0];
    errorSpan.classList.remove('grammar-error');
    hideTooltip();
  }
}

function preserveCase(original, replacement) {
  if (original === original.toUpperCase()) {
    return replacement.toUpperCase();
  } else if (original[0] === original[0].toUpperCase()) {
    return replacement.charAt(0).toUpperCase() + replacement.slice(1).toLowerCase();
  } else {
    return replacement.toLowerCase();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

import speech_recognition as sr
import time
r = sr.Recognizer()
class SST:
	out = "prompt"
	def __init__(self, out_file = "prompt"):
		out = out_file
	def sst(self):
		try:
			with sr.Microphone() as source:
				print("Listening...")
				time.sleep(0.5)
				r.adjust_for_ambient_noise(source, duration=0.2)
				text = ""
				while "gizmo" not in text:
					try:
						audio = r.listen(source)

						text = r.recognize_google(audio)
						text = text.lower()
						print(text)
					except sr.UnknownValueError:
						print("Could not understand audio")
						continue

				
				text = text.lower()  
				text.replace("gizmo", "")
				print("You said:", text)
					
				with open("prompt", "w") as f:
					f.write("answer this like you are talking to someone. keep it brief without weird formatting. Do not comment on how short or long your answer is, you are just talking to a friend. " + text)
					

		except sr.RequestError as e:
				print("Could not request results; {0}".format(e))


		except KeyboardInterrupt:
			print("Program terminated by user")

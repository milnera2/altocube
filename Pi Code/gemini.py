from google import genai
import os
from dotenv import load_dotenv
load_dotenv()
# 1. Setup your API Key
class gemini:
	api_key = os.getenv('GEMINI_API_KEY')
	client = genai.Client(api_key=api_key)
	
	# 2. Call the Gemini API
	def call_gemini(self):
		with open("prompt", "r") as f:
			text = f.read()
		response = self.client.models.generate_content(
			model="gemini-2.5-flash", 
			contents=text
		)

		# 3. Extract the text
		output_text = response.text

		# 4. Save to a text file
		with open("response.txt", "w", encoding="utf-8") as f:
			f.write(output_text)

		print("Response successfully saved to response.txt")

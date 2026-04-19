from elevenlabstts import *
from SST import *
from gemini import *
import time


from dotenv import load_dotenv
import os
import subprocess
os.environ['SDL_AUDIODRIVER'] = 'alsa'

# Initialize the mixer with specific settings for Pi hardware

load_dotenv()
api_key = os.getenv('ELEVENLABS_API_KEY')
tts = ElevenLabsTTS(api_key)
gem = gemini()
print("waking up")
time.sleep(2)
while True:
    sst = SST()
    sst.sst()
    gem.call_gemini()
    with open("response.txt", "r") as f:
        text = f.read()
    audio_data = tts.text_to_speech(
			text=text
		)
    tts.save_audio(audio_data, "speech.mp3")
    try:
	    subprocess.run(["mpg123", "-a", "hw:2,0", "--realtime", "-q", "speech.mp3"],check=True)
    except Exception as e:
        print(f"Error playing audio with mpg123: {e}")


	

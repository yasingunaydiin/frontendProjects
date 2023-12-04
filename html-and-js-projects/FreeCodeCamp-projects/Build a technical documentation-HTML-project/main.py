import azure.cognitiveservices.speech as speech_sdk

speech_config = speech_sdk.SpeechConfig("5f9290a07ec2461ca205e7425219c957", "westeurope")
speech_config.speech_recognition_language = "tr-TR"

audio_config = speech_sdk.AudioConfig(use_default_microphone=True)

speech_client = speech_sdk.SpeechRecognizer(speech_config, audio_config)
"""
print("Listening...")

result = speech_client.recognize_once_async().get()

print(result)
print(result.text)"""

speech_translation_config = speech_sdk.translation.SpeechTranslationConfig("5f9290a07ec2461ca205e7425219c957", "westeurope")
speech_translation_config.speech_recognition_language = "tr-TR"

speech_translation_config.add_target_language('en-US')
speech_translation_config.add_target_language('nl-NL')

print("Translator listening...")
translator = speech_sdk.translation.TranslationRecognizer(speech_translation_config)

translation_result = translator.recognize_once_async().get()

print(translation_result)
eng = translation_result.translations['en']
neth = translation_result.translations['nl']

speech_config.speech_synthesis_voice_name = 'en-GB-LibbyNeural'
speech_synthesizer = speech_sdk.SpeechSynthesizer(speech_config)
speech_synthesizer.speak_text_async(eng).get()

sp_nl = speech_sdk.SpeechConfig("5f9290a07ec2461ca205e7425219c957", "westeurope")
sp_nl.speech_synthesis_voice_name = 'nl-NL-MaartenNeural'
speech_synthesizer_nl = speech_sdk.SpeechSynthesizer(sp_nl)
speech_synthesizer_nl.speak_text_async(neth).get()


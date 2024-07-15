import React, { useState, useRef } from 'react';


const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;

    mediaRecorder.ondataavailable = (event) => {
      audioChunksRef.current.push(event.data);
    };

    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
      const url = URL.createObjectURL(audioBlob);
      setAudioURL(url);
    };

    mediaRecorder.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  const sendAudio = () => {
    const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
    // Send the audioBlob to your server
    console.log('Sending audio file:', audioBlob);
  };

const audioStyles = {
    inputStyle: " px-2 py-2 rounded-md w-full border border-slate-300 mb-2 outline-red-400",
    bigContainer: "flex flex-col w-full px-3 md:w-[400px] md:h-[400px] mb-2 text-sm my-2 w-full",
    audioContainer: "rounded-lg flex flex-col  w-full px-7 items-center justify-center ",
    audioHeader: "font-bold text-red-500 text-xl my-4"
  };

  return (
    <div className={audioStyles.audioContainer}>
      <h2 className={audioStyles.audioHeader}>Panic Mode: Record Audio</h2>
      <div className={audioStyles.bigContainer}>
      {isRecording ? (
        <button onClick={stopRecording} className="record-button stop">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
            </svg>

        </button>
      ) : (
        <button onClick={startRecording} className="record-button start">Start Recording</button>
      )}
      {audioURL && (
        <div className=' rounded-md p-2 border border-slate-300'>
          <audio src={audioURL} controls />
          <button onClick={sendAudio} className="send-button">Send Audio</button>
        </div>
      )}
      </div>
     
    </div>
  );
};

export default AudioRecorder;

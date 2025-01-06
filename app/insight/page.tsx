'use client';
import React, { useState } from 'react';
import axios from 'axios';

const Page = () => {
    const [postType, setPostType] = useState('');
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState('');

    const prompt = "I want to see insights for " + postType;
    const langflow = process.env.NEXT_PUBLIC_API_LANGFLOW ?? '';

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const res = await axios.post(
                langflow,
                {
                    input_value: prompt,
                    output_type: "chat",
                    input_type: "chat",
                    tweaks: {
                        "CSVtoData-WwByk": {},
                        "Google Generative AI Embeddings-QPuSf": {},
                        "AstraDB-KWpcz": {},
                        "Prompt-S63n4": {},
                        "ChatInput-YWsO0": {},
                        "ChatOutput-Ifur5": {},
                        "PythonCodeStructuredTool-TT3QD": {},
                        "GroqModel-Kmenx": {
                            "groq_api_key": process.env.NEXT_PUBLIC_GROQ_API_KEY,
                        },
                        "Agent-fJklG": {}
                    }
                },
                {
                    headers: {
                        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_HF_TOKEN}`,
                        "Content-Type": "application/json",
                        "x-api-key": process.env.NEXT_PUBLIC_LANGFLOW_API,
                    },
                }
            );
            const text = res.data.outputs[0].outputs[0].results.message.text;
            setResponse(text);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-20 bg-[#131313] text-white">
            <div className="w-full max-w-4xl bg-[#1a1a1a] border border-[#333] rounded-lg shadow-md">
                <header className="px-6 py-4 border-b border-[#333] bg-[#212121] rounded-t-lg">
                    <h1 className="text-2xl font-semibold text-white/80">See Insight</h1>
                </header>
                <div className="p-6 flex flex-col gap-6">
                    <select
                        value={postType}
                        onChange={(e) => setPostType(e.target.value)}
                        className="bg-[#212121] border border-[#333] text-white/80 text-sm rounded-lg focus:ring-0 focus:border-[#444] block w-full p-2.5"
                    >
                        <option value="">Select post type</option>
                        <option value="event">Event</option>
                        <option value="document">Document</option>
                        <option value="text_post">Text Post</option>
                        <option value="gif_animation">GIF Animation</option>
                        <option value="reels">Reels</option>
                        <option value="carousel">Carousel</option>
                        <option value="grid">Grid Layout</option>
                        <option value="list">List View</option>
                    </select>
                    <button
                        onClick={handleSubmit}
                        className={`w-full px-4 py-2 text-lg font-medium text-white rounded-lg transition-all duration-300 
                            ${loading ? 'bg-[linear-gradient(-145deg,_#FBCB50_0%,_#D87297_43%,_#E36658_100%)] opacity-70 ' : 'bg-[linear-gradient(-145deg,_#FBCB50_0%,_#D87297_43%,_#E36658_100%)] colorshadowbox3'}`}
                        disabled={loading}
                    >
                        {loading ? 'Analyzing...' : 'Analyze'}
                    </button>
                    <div className="w-full h-60 md:h-80 bg-[#191919] border border-[#333] p-4 rounded-lg overflow-auto">
                        <h2 className="text-lg font-medium text-white/80">Response:</h2>
                        <pre className="mt-2 text-sm text-white bg-[#212121] p-4 rounded-lg" style={{ whiteSpace: 'pre-wrap' }}>
                            {response}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;

import React, { useState } from 'react';
import '../../styles/FAQSection.css';

const FAQSection = () => {
    const [faqItems, setFaqItems] = useState([
        {
            question: 'What is WeatherApp?',
            answer:
                'WeatherApp is a weather forecast application that provides real-time weather information for different locations around the world. You can search for any city or region and get detailed weather data.',
            isOpen: false,
        },
        {
            question: 'How can I search for a location?',
            answer:
                'In the search bar, simply type the name of the city or location you want to check the weather for, and press the "Search" button. WeatherApp will fetch and display the weather information for the specified location.',
            isOpen: false,
        },
        {
            question: 'Can I see the hourly weather forecast?',
            answer:
                'Yes, WeatherApp provides both hourly and daily weather forecasts. You can switch between the hourly and daily views to see the weather predictions for different time periods.',
            isOpen: false,
        },
        {
            question: 'What are the main features of WeatherApp?',
            answer:
                ' WeatherApp provides real-time weather information for various locations worldwide, hourly and daily forecasts, and user-friendly weather tracking.',
            isOpen: false,
        },
        {
            question: 'Can I access WeatherApp from my mobile device?',
            answer:
                ' Yes, WeatherApp is fully responsive, and you can access it from any device, including smartphones and tablets.',
            isOpen: false,
        },
        {
            question: 'Is WeatherApp free to use?',
            answer:
                'Yes, WeatherApp is completely free to use. You can access real-time weather data and forecasts without any cost or subscription.',
            isOpen: false,
        },

    ]);

    const handleToggle = (index) => {
        setFaqItems((prevItems) =>
            prevItems.map((item, i) =>
                i === index ? { ...item, isOpen: !item.isOpen } : { ...item, isOpen: false }
            )
        );
    };

    return (
        <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
                {faqItems.map((item, index) => (
                    <div className="faq-item" key={index}>
                        <div
                            className={`faq-question ${item.isOpen ? 'open' : ''}`}
                            onClick={() => handleToggle(index)}
                        >
                            <span>{item.question}</span>
                            <span className="arrow">{item.isOpen ? '-' : '+'}</span>
                        </div>
                        {item.isOpen && <div className="faq-answer">{item.answer}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;

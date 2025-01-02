import React, { useState } from "react";

function Test() {
    const [formData, setFormData] = useState({
        menu_date_id: "",
        email: "",
        comment: "",
        data: [],
    });
    const [foodName, setFoodName] = useState("");
    const [ratingValue, setRatingValue] = useState("");
    const [photo, setPhoto] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setPhoto(e.target.files[0]);
    };

    const handleAddData = () => {
        const newEntry = { food_name: foodName, rating_value: ratingValue };
        setFormData({
            ...formData,
            data: [...formData.data, newEntry],
        });
        setFoodName("");
        setRatingValue("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const submitData = new FormData();
        submitData.append("menu_date_id", formData.menu_date_id);
        submitData.append("email", formData.email);
        submitData.append("comment", formData.comment);
        submitData.append("data", JSON.stringify(formData.data));
        if (photo) {
            submitData.append("photo", photo);
        }

        try {
            const response = await fetch("http://localhost:4000/api/v1/review", {
                method: "POST",
                body: submitData,
            });

            const result = await response.json();
            console.log("Success:", result);
            alert("Form submitted successfully!");
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to submit form.");
        }
    };

    return (
        <form style={{color:"white"}} onSubmit={handleSubmit}>
            <div>
                <label>
                    Menu Date ID:
                    <input
                        type="text"
                        name="menu_date_id"
                        value={formData.menu_date_id}
                        onChange={handleInputChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Comment:
                    <textarea
                        name="comment"
                        value={formData.comment}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                </label>
            </div>
            <div>
                <label>
                    Food Name:
                    <input
                        type="text"
                        value={foodName}
                        onChange={(e) => setFoodName(e.target.value)}
                    />
                </label>
                <label>
                    Rating Value:
                    <input
                        type="number"
                        value={ratingValue}
                        onChange={(e) => setRatingValue(e.target.value)}
                    />
                </label>
                <button type="button" onClick={handleAddData}>
                    Add Data
                </button>
            </div>
            <div>
                <label>
                    Photo:
                    <input type="file" name="photo" onChange={handleFileChange} />
                </label>
            </div>
            <button type="submit">Submit</button>
            <div>
                <h3>Data Preview:</h3>
                <ul>
                    {formData.data.map((item, index) => (
                        <li key={index}>
                            {item.food_name} - {item.rating_value}
                        </li>
                    ))}
                </ul>
            </div>
        </form>
    );
}

export default Test;

/*
import React from 'react';

function test() {
    const handleKakaoLogin = async () => { 
        //이게 안좋은 방식인데 일단 
        //프론트에서 처리하는거 최대한 없애려고 대부분의 책임을 백엔드로 옮겨둠.
        window.location.href = 'http://localhost:4000/api/v1/users/kakao';
    }
  return (
    <div>
      <h2>백엔드 개발 테스트용용</h2>
      <p>백엔드 개발에서 실험해볼꺼 테스트하는 용입니다..</p>
      <button onClick={handleKakaoLogin}>카카오로 로그인하기</button>
    </div>
  );
}

export default test;
*/
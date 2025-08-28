import React from "react";
import BannerImage from "../assets/banneryeni.jpg";
import "../styles/About.css";

export const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p style={{ marginBottom: "40px" }}>
          Burger Yiyelim olarak, lezzeti ve kaliteyi her zaman ön planda tutan
          bir hamburger deneyimi sunuyoruz. Her bir burgerimiz, taze ve doğal
          malzemelerle hazırlanır; özenle seçilmiş etler, çıtır sebzeler ve özel
          soslarımızla birleşerek damaklarda unutulmaz bir tat bırakır.
          Amacımız, sadece hızlı yemek sunmak değil; müşterilerimize keyifli,
          samimi ve sıcak bir restoran deneyimi yaşatmaktır. Burger Yiyelim’de
          her ziyaretinizde kendinizi evinizde gibi hissedecek, lezzetli
          burgerlerimizi paylaşmanın tadını çıkaracaksınız. Bizim için
          hamburger, sadece bir yemek değil; tutku, kalite ve mutluluğun bir
          ifadesidir. Gelin, Burger Yiyelim’de bu lezzet yolculuğuna katılın ve
          her ısırıkta farkı hissedin.
        </p>
      </div>
    </div>
  );
};

import React from "react";
import "./TipsPage.css";
import Tip from "./Tip";
import Footer from "../Footer";

function TipsPage() {
  return (
    <>
      <div className="tipspage-container">
        <h1 className="tips-hdr">בלוג מחפשי עבודה</h1>
        <div className="upper-tips-container">
          <div className="tip-wrapper">
            <Tip
              path="/article_1"
              image="images/image3.jpg"
              title="טיפים לראיון עבודה"
              date="01.08.2024"
              articlePreview=" 
            
            לעיתים, ראיון החלומות שלך עומד בפתח, ואתה רק מחכה כדי להיגאל
            מהמרוץ אחר מודעות הדרושים...
            כל מה שעליך לעשות הוא לשים לב לכמה נקודות עיקריות שיעזרו לך
            לעבור ראיון עבודה בשלום:
              1. התאמן והתכונן כראוי רצוי לעבור הכנה לראיון..."
            />
          </div>
          <div className="tip-wrapper">
            <Tip
              path="/article_2"
              image="images/image5.jpg"
              title="כלים לניהול פרוייקט החזרה לשוק העבודה"
              date="01.08.2024"
              articlePreview="
            אחד הטורים האחרונים עסק בחשיבות של ניהול תהליך חיפוש עבודה
            כפרוייקט לכל דבר, עם דגש על אינטנסיביות החיפוש, תוך שימוש בכלי
            ניהול ובקרת פרוייקט כתנאי להצלחה..."
            />
          </div>
          <div className="tip-wrapper">
            <Tip
              path="/article_3"
              image="images/happy2.jpg"
              title="השאלות הכי קשות בראיון עבודה"
              date="01.08.2024"
              articlePreview="
            השאלות הכי קשות שיכולות לעלות בראיון עבודה חיפוש עבודה יכול להיות עסק לא קל. לפעמים מגיעים לראיון עבודה שאנחנו ממש מצפים לו ולא מכינים את עצמנו לסוג של שאלות שאף פעם לא נשאלנו..."
            />
          </div>
          <div className="tip-wrapper">
            <Tip
              path="/article_4"
              image="images/handshake.jpg"
              title="חיפוש עבודה - כך תעשו את זה נכון"
              date="01.09.2024"
              articlePreview="חיפוש עבודה עלול להיות משימה מאתגרת ולעתים קרובות מכריעה. מזיהוי הזדמנויות מתאימות ויצירת יישומים מותאמים אישית ועד הכנה לראיונות ומעבר לכך, זה דורש אסטרטגיה מובנית היטב והרבה חוסן אישי..."
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TipsPage;
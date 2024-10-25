import React from "react";
import Footer from "../../components/Footer.js";
import "./Article.css";
import Tip from "../../components/Tips/Tip.js";
import SocialMediaLinks from "./SocialMediaLinks.js";

function Article3() {
  return (
    <>
      <div className="article-container">
        <div className="article-wrapper">
          <div className="article-image-wrapper">
            <img
              alt="Article"
              src="images/happy2.jpg"
              className="article-image"
            />
          </div>
          <div className="article-text">
            <p className="article-date">01.08.2024</p>
            <h1 className="article-title">השאלות הכי קשות בראיון עבודה</h1>
            <div className="article-paragraphs">
            <SocialMediaLinks/>
              <p>
              השאלות הכי קשות שיכולות לעלות בראיון עבודה חיפוש עבודה יכול להיות עסק לא קל. לפעמים מגיעים לראיון עבודה שאנחנו ממש מצפים לו ולא מכינים את עצמנו לסוג של שאלות שאף פעם לא נשאלנו.
              </p>
              <p>
              כדאי לקחת בחשבון סוגים שונים של שאלות. לפניכם מספר דוגמאות:
              </p>
              <li className="list-of-tips">
                <p>
                1. דבר על עצמך.... זו אחת השאלות הכי קשות. חשוב לקחת את השאלה הזו בחשבון ופשוט להכין את עצמך לשאלה כזו. גמגומים לא באים בחשבון. נסה לספר בסדר כרונולוגי את כל הדברים שעברת ורלוונטיים – תיכון, צבא, אוניברסיטה, התפקידים שעשית וכו'.
                </p>
                <p>
                נסה לספר בקצרה בכל מקום מה עשית, במה היית מעורב, פרויקטים שהובלת וכו'. אפשר להוסיף תחביבים, התנדבויות ושאר עיסוקים מעניינים. רצוי להכין מראש 2 דקות של דיבור קולח על עצמך.
                </p>
              </li>
              <li className="list-of-tips">
                <p>
                2. מנה שלוש תכונות חיוביות ושלוש תכונות שליליות – השאלה בפני עצמה היא טריקית, משום שברור שיש תכונות שיכולות להיות שליליות או חיוביות, תלוי במצב. החוכמה היא "להודות" בתכונות הרעות שלכם כמובן, אבל לבחור את התכונות שהם כמה שפחות גרועות ושאינו רלוונטיות לעבודה אליה אתם מנסים להתקבל.
                </p>
                
              </li>
              <li className="list-of-tips">
                <p>
                3. הסבר מהו DATABASE (בסיס נתונים) בשלושה משפטים לילד בן שלוש – לא, זו לא בדיחה. מדובר בשאלה שמופנה למועמדים למשרות ב- Google.
                </p>
                <p>
                שאלה זו מייצגת בכלל רשימת שאלות מוזרות ומפתיעות שיכולות להישאל בעיקר בראיונות עבודה לחברות סטארט אפ או חברות צעירות שמחפשות בעיקר עובדים יצירתיים ובלתי שגרתיים.
                </p>
                <p>במקרים כאלה מומלץ לחשוב על תשובה קצרה, מקורית, שנונה, אולי גם מצחיקה קצת והכי חשוב – להישאר נינוח ורגוע ולא להראות שהשאלה מפריעה לך באיזשהי צורה.</p>
              </li>
              <li className="list-of-tips">
                <p>
                4. אם היית מנהיג של מדינה, באיזו מדינה היית בוחר ולאיזו בעיה היית ניגש דבר ראשון?
                </p>
              </li>
              <p>אז קודם כל, מדובר בסוג השאלות שמעבר ליצירתיות נדרש כאן ידע כללי נרחב. אנשים שקוראים עיתונים ומעורים במצב הפוליטי והכלכלי במקומות שונים בעולם. לאנשים שהם פחות כאלה, אפשר לצאת מזה ע"י "בריחה" למדינה שאתם הכי מכירים ומעבר לזה אפשר לאלתר ולקוות שאף אחד לא יסתור אותך...</p>
            </div>
          </div>
        </div>
        <div className="more-articles-container">
          <h1>מאמרים נוספים שיכולים לעניין אותך</h1>
          <div className="more-arts-wrapper">
          <div className="more-article-wr">
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
          <div className="more-article-wr">
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
          </div>
          
          
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Article3;
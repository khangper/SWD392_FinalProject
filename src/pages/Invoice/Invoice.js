// import React, { useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import "./Invoice.css";
// import { PATH_NAME } from "../../constant/pathname";
// import hakaFull_logo from "../../assets/Haka_Online_Learning_System_logo.png";

// const Invoice = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { address } = location.state || {};
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);

//   const ShoppingCart_API_URL =
//     "https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/ShoppingCart";
//   const Purchases_API_URL =
//     "https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/MyPurchase-Course";

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await fetch(ShoppingCart_API_URL);
//         if (!response.ok) throw new Error("Network response was not ok");

//         const data = await response.json();
//         setCourses(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCourses();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   // Calculate the total amount including VAT
//   const totalAmount = courses.reduce((acc, course) => {
//     const price = parseFloat(course.price.replace("$", ""));
//     const vat = price * 0.2;
//     return acc + price + vat;
//   }, 0);

//   const handlePrintClick = () => {
//     setShowModal(true);
//   };

//   const createNewPurchase = async () => {
//     try {
//       const titles = courses.map((course) => course.title).join(", ");
//       const authors = courses.map((course) => course.author).join(", ");
//       const categories = courses.map((course) => course.category).join(", ");
//       const Linkyoutube = courses
//         .map((course) => course.Linkyoutube)
//         .join(", ");

//       // Fetch current purchases to determine the latest itemNo
//       const response1 = await fetch(Purchases_API_URL);
//       if (!response1.ok) throw new Error("Failed to fetch purchases");

//       const existingPurchases = await response1.json();

//       // Determine the highest itemNo and increment by 1
//       const maxItemNo = existingPurchases.reduce((max, purchase) => {
//         const itemNo = parseInt(purchase.itemNo, 10);
//         return itemNo > max ? itemNo : max;
//       }, 0);
//       const newItemNo = maxItemNo + 1;
//       const newPurchase = {
//         itemNo: newItemNo.toString(),
//         title: `${titles}`,
//         Vendor: authors,
//         Category: categories,
//         DeliveryType: "Download",
//         Purchase: "9 November 2024",
//         Price: totalAmount.toFixed(2),
//         courses: courses.map((course) => ({
//           title: course.title,
//           price: course.price,
//           id: course.id,
//           Linkyoutube: Linkyoutube,
//         })),
//         address: address,
//         totalAmount: totalAmount.toFixed(2),
//       };

//       const response = await fetch(Purchases_API_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newPurchase),
//       });
//       if (!response.ok) throw new Error("Failed to create purchase");
//     } catch (error) {
//       console.error("Error creating new purchase:", error);
//     }
//   };

//   const handleModalYes = () => {
//     setShowModal(false);
//     setShowSuccessMessage(true);
//     createNewPurchase();
//     setTimeout(() => {
//       setShowSuccessMessage(false);
//       navigate(PATH_NAME.HOME);
//     }, 2000);
//   };

//   const handleModalNo = () => setShowModal(false);

//   return (
//     <div className="Invoice_Container">
//       <div className="Invoice_Header">
//         <div className="Invoice_Header_Item">
//           <div className="Header_Logo">
//             <Link to={PATH_NAME.HOME}>
//               <img src={hakaFull_logo} alt="Logo" />
//             </Link>
//           </div>
//           <p>Invoice</p>
//         </div>
//       </div>
//       <div className="Invoice_Body">
//         <div className="Invoice_Date_Inf">
//           <ul>
//             <li>
//               <div className="vdt-list">
//                 <span>Date:</span> 10 April 2020
//               </div>
//             </li>
//             <li>
//               <div className="vdt-list">
//                 <span>Invoice No:</span> IVIP12023598
//               </div>
//             </li>
//             <li>
//               <div className="vdt-list">
//                 <span>Order ID:</span> 1258963487
//               </div>
//             </li>
//           </ul>
//         </div>
//         <div className="Invoice_Body_Content">
//           <div className="Inv_Content_Title">
//             <h2>Invoice</h2>
//           </div>
//           <div className="Inv_Detail_Row">
//             <div className="Inv_Detail_Content-To">
//               <h4>To</h4>
//               <div className="vdt-list" style={{ whiteSpace: "pre-line" }}>
//                 {address}
//               </div>
//             </div>
//             <div className="Inv_Detail_Content-Cursus">
//               <h4>Haka</h4>
//               <div className="vdt-list">Haka LTD</div>
//               <div className="vdt-list">#1234, Shahid Karnail Singh Nagar,</div>
//               <div className="vdt-list">
//                 Near MBD Mall, 141001, Ludhiana, Punjab, India
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="Invoice_Table">
//           <div className="tb_head">
//             <p>Item</p>
//             <p>Price</p>
//             <p>VAT (20%)</p>
//             <p>Total Amount</p>
//           </div>
//           {courses.map((course) => {
//             const price = parseFloat(course.price.replace("$", ""));
//             const vat = price * 0.2;
//             const totalAmount = price + vat;
//             return (
//               <div className="user_dt_trans" key={course.id}>
//                 <p>{course.title}</p>
//                 <p>${price.toFixed(2)}</p>
//                 <p>${vat.toFixed(2)}</p>
//                 <p>${totalAmount.toFixed(2)}</p>
//               </div>
//             );
//           })}
//           <div className="user_dt_trans jsk1145">
//             <div className="totalinv2">
//               Invoice Total : USD ${totalAmount.toFixed(2)}
//             </div>
//             <p>Paid via Paypal</p>
//           </div>
//         </div>
//         <div className="Invoice_Footer">
//           <div className="Left_Footer">
//             <p>Thanks for buying</p>
//           </div>
//           <div className="Right_Footer">
//             <button className="print_btn" onClick={handlePrintClick}>
//               Print
//             </button>
//           </div>
//         </div>
//       </div>
//       {showModal && (
//         <div className="modal">
//           <div className="modal_content">
//             <p>Do you want to print the invoice?</p>
//             <button onClick={handleModalYes}>Yes</button>
//             <button onClick={handleModalNo}>No</button>
//           </div>
//         </div>
//       )}
//       {showSuccessMessage && (
//         <div className="invoice_success_message">
//           <p>Invoice printed successfully!</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Invoice;
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Invoice.css";
import { PATH_NAME } from "../../constant/pathname";
import hakaFull_logo from "../../assets/Haka_Online_Learning_System_logo.png";

const Invoice = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { address } = location.state || {};
  const [courses, setCourses] = useState([]);
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const ShoppingCart_API_URL =
    "https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/ShoppingCart";
  const Purchases_API_URL =
    "https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/MyPurchase-Course";
  const FeaturedCourses_API_URL =
    "https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/home_featuredcourse";

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(ShoppingCart_API_URL);
        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        setCourses(data);
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchFeaturedCourses = async () => {
      try {
        const response = await fetch(FeaturedCourses_API_URL);
        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        setFeaturedCourses(data);
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchData = async () => {
      await Promise.all([fetchCourses(), fetchFeaturedCourses()]);
      setLoading(false); // Set loading to false after both fetches
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const totalAmount = courses.reduce((acc, course) => {
    const price = parseFloat(course.price.replace("$", ""));
    const vat = price * 0.2;
    return acc + price + vat;
  }, 0);

  const handlePrintClick = () => {
    setShowModal(true);
  };

  // const createNewPurchase = async () => {
  //   try {
  //     const titles = courses.map((course) => course.title).join(", ");
  //     const authors = courses.map((course) => course.author).join(", ");
  //     const categories = courses.map((course) => course.category).join(", ");

  //     const Linkyoutube = courses
  //       .map((course) => {
  //         const featuredCourse = featuredCourses.find(
  //           (fc) => fc.title === course.title
  //         );
  //         return featuredCourse
  //           ? featuredCourse.feature_courses_detail.Linkyoutube
  //           : null; // Return null instead of "N/A"
  //       })
  //       .filter((link) => link) // Filter out null values
  //       .join(", ");

  //     const response1 = await fetch(Purchases_API_URL);
  //     if (!response1.ok) throw new Error("Failed to fetch purchases");

  //     const existingPurchases = await response1.json();
  //     const maxItemNo = existingPurchases.reduce((max, purchase) => {
  //       const itemNo = parseInt(purchase.itemNo, 10);
  //       return itemNo > max ? itemNo : max;
  //     }, 0);
  //     const newItemNo = maxItemNo + 1;
  //     const newPurchase = {
  //       itemNo: newItemNo.toString(),
  //       title: `${titles}`,
  //       Vendor: authors,
  //       Category: categories,
  //       DeliveryType: "Download",
  //       Purchase: "9 November 2024",
  //       Price: totalAmount.toFixed(2),
  //       courses: courses.map((course) => ({
  //         title: course.title,
  //         price: course.price,
  //         id: course.id,
  //         Linkyoutube: Linkyoutube,
  //       })),
  //       address: address,
  //       totalAmount: totalAmount.toFixed(2),
  //     };

  //     const response = await fetch(Purchases_API_URL, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(newPurchase),
  //     });
  //     if (!response.ok) throw new Error("Failed to create purchase");
  //   } catch (error) {
  //     console.error("Error creating new purchase:", error);
  //   }
  // };
  const createNewPurchase = async () => {
    try {
      const titles = courses.map((course) => course.title).join(", ");
      const authors = courses.map((course) => course.author).join(", ");
      const categories = courses.map((course) => course.category).join(", ");

      // Tạo mảng chứa các đường dẫn Linkyoutube từ featuredCourses
      const LinkyoutubeArray = courses.map((course) => {
        const featuredCourse = featuredCourses.find(
          (fc) => fc.title === course.title // So sánh title giữa các khóa học
        );
        return featuredCourse
          ? featuredCourse.feature_courses_detail?.Linkyoutube // Lấy Linkyoutube nếu tìm thấy
          : null;
      });

      const filteredLinkyoutube = LinkyoutubeArray.filter((link) => link); // Lọc các giá trị null

      const response1 = await fetch(Purchases_API_URL);
      if (!response1.ok) throw new Error("Failed to fetch purchases");

      const existingPurchases = await response1.json();
      const maxItemNo = existingPurchases.reduce((max, purchase) => {
        const itemNo = parseInt(purchase.itemNo, 10);
        return itemNo > max ? itemNo : max;
      }, 0);
      const newItemNo = maxItemNo + 1;
      const newPurchase = {
        itemNo: newItemNo.toString(),
        title: `${titles}`,
        Vendor: authors,
        Category: categories,
        DeliveryType: "Download",
        Purchase: "9 November 2024",
        Price: totalAmount.toFixed(2),
        courses: courses.map((course, index) => ({
          title: course.title,
          price: course.price,
          id: course.id,
          imgSrc: course.imgSrc,
          Linkyoutube: filteredLinkyoutube[index] || null, // Gán Linkyoutube tương ứng hoặc null
        })),
        address: address,
        totalAmount: totalAmount.toFixed(2),
      };

      // Tiếp tục thực hiện fetch để lưu purchase mới
      const response = await fetch(Purchases_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPurchase),
      });
      if (!response.ok) throw new Error("Failed to create purchase");
    } catch (error) {
      console.error("Error creating new purchase:", error);
    }
  };

  const handleModalYes = () => {
    setShowModal(false);
    setShowSuccessMessage(true);
    createNewPurchase();
    setTimeout(() => {
      setShowSuccessMessage(false);
      navigate(PATH_NAME.HOME);
    }, 2000);
  };

  const handleModalNo = () => setShowModal(false);

  return (
    <div className="Invoice_Container">
      <div className="Invoice_Header">
        <div className="Invoice_Header_Item">
          <div className="Header_Logo">
            <Link to={PATH_NAME.HOME}>
              <img src={hakaFull_logo} alt="Logo" />
            </Link>
          </div>
          <p>Invoice</p>
        </div>
      </div>
      <div className="Invoice_Body">
        <div className="Invoice_Date_Inf">
          <ul>
            <li>
              <div className="vdt-list">
                <span>Date:</span> 10 April 2020
              </div>
            </li>
            <li>
              <div className="vdt-list">
                <span>Invoice No:</span> IVIP12023598
              </div>
            </li>
            <li>
              <div className="vdt-list">
                <span>Order ID:</span> 1258963487
              </div>
            </li>
          </ul>
        </div>
        <div className="Invoice_Body_Content">
          <div className="Inv_Content_Title">
            <h2>Invoice</h2>
          </div>
          <div className="Inv_Detail_Row">
            <div className="Inv_Detail_Content-To">
              <h4>To</h4>
              <div className="vdt-list" style={{ whiteSpace: "pre-line" }}>
                {address}
              </div>
            </div>
            <div className="Inv_Detail_Content-Cursus">
              <h4>Haka</h4>
              <div className="vdt-list">Haka LTD</div>
              <div className="vdt-list">#1234, Shahid Karnail Singh Nagar,</div>
              <div className="vdt-list">
                Near MBD Mall, 141001, Ludhiana, Punjab, India
              </div>
            </div>
          </div>
        </div>
        <div className="Invoice_Table">
          <div className="tb_head">
            <p>Item</p>
            <p>Price</p>
            <p>VAT (20%)</p>
            <p>Total Amount</p>
          </div>
          {courses.map((course) => {
            const price = parseFloat(course.price.replace("$", ""));
            const vat = price * 0.2;
            const totalAmount = price + vat;
            return (
              <div className="user_dt_trans" key={course.id}>
                <p>{course.title}</p>
                <p>${price.toFixed(2)}</p>
                <p>${vat.toFixed(2)}</p>
                <p>${totalAmount.toFixed(2)}</p>
              </div>
            );
          })}
          <div className="user_dt_trans jsk1145">
            <div className="totalinv2">
              Invoice Total : USD ${totalAmount.toFixed(2)}
            </div>
            <p>Paid via Paypal</p>
          </div>
        </div>
        <div className="Invoice_Footer">
          <div className="Left_Footer">
            <p>Thanks for buying</p>
          </div>
          <div className="Right_Footer">
            <button className="print_btn" onClick={handlePrintClick}>
              Print
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal-container">
          <div className="modal_content">
            <p>Do you want to print the invoice?</p>
            <button onClick={handleModalYes}>Yes</button>
            <button onClick={handleModalNo}>No</button>
          </div>
        </div>
      )}
      {showSuccessMessage && (
        <div className="invoice_success_message">
          <p>Invoice printed successfully!</p>
        </div>
      )}
    </div>
  );
};

export default Invoice;

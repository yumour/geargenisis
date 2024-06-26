import mouse1 from "../../assets/images/mouse1.jpeg";
import mouse2 from "../../assets/images/mouse2.jpeg";
import mouse3 from "../../assets/images/mouse3.jpeg";
import mouse1white from "../../assets/images/mouse1White.jpeg";
import mousepad from "../../assets/images/mousepad1.jpeg";
import mousepad1 from "../../assets/images/mousepad2.jpeg";
import mousepad2 from "../../assets/images/mousepad3.jpeg";

const mouses = [
  {
    id: 1,
    title: "Mouse Gear 1 لاسلكي",
    description: "ماوس جايمينغ لاسلكي عالي الدقة مصمم للراحة والأداء.",
    category: "mouses",
    price: 899.99,
    discountPercentage: 10,
    rating: 4.5,
    stock: 120,
    tags: ["لاسلكي", "جايمينج"],
    brand: "تك براند",
    sku: "TB-EM-100",
    weight: 150,
    dimensions: {
      width: 6.5,
      height: 4,
      depth: 3,
    },
    warrantyInformation: "ضمان محدود لمدة سنة واحدة",
    shippingInformation: "يشحن خلال يومين عمل.",
    availabilityStatus: "متوفر في المخزون",
    reviews: [
      {
        rating: 5,
        comment: "ماوس ممتاز ومريح جدًا للاستخدام!",
        date: "2024-01-15",
        reviewerName: "جون دو",
        reviewerEmail: "john.doe@example.com",
      },
      {
        rating: 4,
        comment: "قيمة رائعة مقابل المال.",
        date: "2024-01-20",
        reviewerName: "جين سميث",
        reviewerEmail: "jane.smith@example.com",
      },
      {
        rating: 4,
        comment: "أداء جيد، لكن عمر البطارية يمكن أن يكون أفضل.",
        date: "2024-02-10",
        reviewerName: "مايك براون",
        reviewerEmail: "mike.brown@example.com",
      },
    ],
    returnPolicy: "سياسة إرجاع لمدة 30 يومًا.",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "2024-01-01T12:00:00Z",
      updatedAt: "2024-06-10T12:00:00Z",
      barcode: "012345678912",
      qrCode: "http://example.com/qrcode",
    },
    images: [mouse1, mouse1white],
    thumbnail: mouse1,
  },
  {
    id: 2,
    title: "Mouse Gear 1 wired",
    description: "ماوس  عالي الدقة مصمم للراحة والأداء.",
    category: "mouses",
    price: 499.99,
    discountPercentage: 10,
    rating: 4.5,
    stock: 120,
    tags: ["سلكي", "عادي"],
    brand: "تك براند",
    sku: "TB-EM-100",
    weight: 150,
    dimensions: {
      width: 6.5,
      height: 4,
      depth: 3,
    },
    warrantyInformation: "ضمان محدود لمدة سنة واحدة",
    shippingInformation: "يشحن خلال يومين عمل.",
    availabilityStatus: "متوفر في المخزون",
    reviews: [
      {
        rating: 5,
        comment: "ماوس ممتاز ومريح جدًا للاستخدام!",
        date: "2024-01-15",
        reviewerName: "جون دو",
        reviewerEmail: "john.doe@example.com",
      },
      {
        rating: 4,
        comment: "قيمة رائعة مقابل المال.",
        date: "2024-01-20",
        reviewerName: "جين سميث",
        reviewerEmail: "jane.smith@example.com",
      },
      {
        rating: 4,
        comment: "أداء جيد، لكن عمر البطارية يمكن أن يكون أفضل.",
        date: "2024-02-10",
        reviewerName: "مايك براون",
        reviewerEmail: "mike.brown@example.com",
      },
    ],
    returnPolicy: "سياسة إرجاع لمدة 30 يومًا.",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "2024-01-01T12:00:00Z",
      updatedAt: "2024-06-10T12:00:00Z",
      barcode: "012345678912",
      qrCode: "http://example.com/qrcode",
    },
    images: [mouse2],
    thumbnail: mouse2,
  },
  
  {
    id: 3,
    title: "Mouse Gear 2 wireless",
    description: "ماوس لاسلكي عالي الدقة مصمم للراحة والأداء.",
    category: "mouses",
    price: 699.99,
    discountPercentage: 20,
    rating: 4.5,
    stock: 120,
    tags: ["سلكي", "عادي"],
    brand: "تك براند",
    sku: "TB-EM-100",
    weight: 150,
    dimensions: {
      width: 6.5,
      height: 4,
      depth: 3,
    },
    warrantyInformation: "ضمان محدود لمدة سنة واحدة",
    shippingInformation: "يشحن خلال يومين عمل.",
    availabilityStatus: "متوفر في المخزون",
    reviews: [
      {
        rating: 5,
        comment: "ماوس ممتاز ومريح جدًا للاستخدام!",
        date: "2024-01-15",
        reviewerName: "جون دو",
        reviewerEmail: "john.doe@example.com",
      },
      {
        rating: 4,
        comment: "قيمة رائعة مقابل المال.",
        date: "2024-01-20",
        reviewerName: "جين سميث",
        reviewerEmail: "jane.smith@example.com",
      },
      {
        rating: 4,
        comment: "أداء جيد، لكن عمر البطارية يمكن أن يكون أفضل.",
        date: "2024-02-10",
        reviewerName: "مايك براون",
        reviewerEmail: "mike.brown@example.com",
      },
    ],
    returnPolicy: "سياسة إرجاع لمدة 30 يومًا.",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "2024-01-01T12:00:00Z",
      updatedAt: "2024-06-10T12:00:00Z",
      barcode: "012345678912",
      qrCode: "http://example.com/qrcode",
    },
    images: [mouse3],
    thumbnail: mouse3,
  },
  {
    id: 4,
    title: "Mousepad Gear 1 ",
    description: "لوحة انيقة لتزيد من متعة الالعاب.",
    category: "mousepads",
    price: 499.99,
    discountPercentage: 10,
    rating: 4.5,
    stock: 120,
    tags: ["جايمينغ"],
    brand: "تك براند",
    sku: "TB-EM-100",
    weight: 150,
    dimensions: {
      width: 6.5,
      height: 4,
      depth: 3,
    },
    warrantyInformation: "ضمان محدود لمدة سنة واحدة",
    shippingInformation: "يشحن خلال يومين عمل.",
    availabilityStatus: "متوفر في المخزون",
    reviews: [
      {
        rating: 5,
        comment: "ماوس ممتاز ومريح جدًا للاستخدام!",
        date: "2024-01-15",
        reviewerName: "جون دو",
        reviewerEmail: "john.doe@example.com",
      },
      {
        rating: 4,
        comment: "قيمة رائعة مقابل المال.",
        date: "2024-01-20",
        reviewerName: "جين سميث",
        reviewerEmail: "jane.smith@example.com",
      },
      {
        rating: 4,
        comment: "أداء جيد، لكن عمر البطارية يمكن أن يكون أفضل.",
        date: "2024-02-10",
        reviewerName: "مايك براون",
        reviewerEmail: "mike.brown@example.com",
      },
    ],
    returnPolicy: "سياسة إرجاع لمدة 30 يومًا.",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "2024-01-01T12:00:00Z",
      updatedAt: "2024-06-10T12:00:00Z",
      barcode: "012345678912",
      qrCode: "http://example.com/qrcode",
    },
    images: [mousepad,mousepad1,mousepad2],
    thumbnail: mousepad,
  },
];
export default mouses;

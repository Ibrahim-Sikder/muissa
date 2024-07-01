

// import { Metadata } from 'next';

// export async function generateMetadata(): Promise<Metadata> {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/services/get-services`);
//     const servicesData = await res.json();

//     if (!servicesData || !servicesData.data) {
//       return {
//         title: "Services not found",
//         description: "The requested services were not found.",
//       };
//     }

//     return {
//       title: `${servicesData.data.services?.seo_title} | Muissa Consulting`,
//       description: servicesData.data.seo_description || "Read the latest insights and updates.",
//       keywords: servicesData.data.seo_keyword || "Muissa Consulting, Blog, News, Consulting insights, Business updates",
//     };
//   } catch (error) {
//     console.error('Error fetching services data:', error);
//     return {
//       title: "Error",
//       description: "An error occurred while fetching services data.",
//     };
//   }
// }

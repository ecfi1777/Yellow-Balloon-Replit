export type GalleryImage = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

/**
 * Gallery images for The Yellow Balloon kids' haircut salon
 * Images are organized in /assets/gallery/ subfolders
 */

export const mainGalleryImages: GalleryImage[] = [
  { src: "/assets/gallery/home/baby_boy_first_haircut.png", alt: "Baby boy getting his first haircut at The Yellow Balloon" },
  { src: "/assets/gallery/home/boy_green_temporary_color.png", alt: "Boy with fun green temporary hair color at The Yellow Balloon salon" },
  { src: "/assets/gallery/home/boys_haircut_back_view.png", alt: "Professional boy's haircut with clean fade - back view" },
  { src: "/assets/gallery/home/boys_haircut_side_view.png", alt: "Professional boy's haircut with clean fade - side view" },
  { src: "/assets/gallery/home/stylist_cutting_hair.png", alt: "Professional stylist cutting child's hair at The Yellow Balloon" },
  { src: "/assets/gallery/home/baby_getting_haircut.jpg", alt: "Baby getting haircut at The Yellow Balloon with yellow balloon decoration" },
  { src: "/assets/gallery/home/yellow_balloon_staff_1.jpeg", alt: "The Yellow Balloon professional salon staff" },
  { src: "/assets/gallery/home/yellow_balloon_staff_2.jpeg", alt: "The Yellow Balloon team providing quality haircuts" },
];

export const glamourPartyImages: GalleryImage[] = [
  { src: "/assets/gallery/glamour/Glamour_party_styling_photo_1558caf6.png", alt: "Girl enjoying glamour party makeover with updo styling" },
  { src: "/assets/gallery/glamour/Special_occasion_styling_photo_50692872.png", alt: "Special occasion hair styling with elaborate updo" },
  { src: "/assets/gallery/glamour/Glamour_party_celebration_5e0f28c4.png", alt: "Glamour party celebration with kids getting styled" },
  { src: "/assets/gallery/glamour/Group_glamour_party_photo_fc0c14de.png", alt: "Group glamour party with multiple children getting styling services" },
  { src: "/assets/gallery/glamour/Special_occasion_hair_styling_5e630398.png", alt: "Special occasion hair styling service" },
  { src: "/assets/gallery/glamour/Stylish_braids_hair_accessories_d6e2089c.png", alt: "Stylish braids with fun hair accessories" },
  { src: "/assets/gallery/glamour/Creative_ponytails_styling_kids_be3c5733.png", alt: "Creative ponytails and fun styling for kids" },
];

export const liceTreatmentImages: GalleryImage[] = [
  { src: "/assets/gallery/lice/Lice_treatment_salon_scene_b170b8e3.png", alt: "Professional lice treatment service at The Yellow Balloon" },
];

export const firstHaircutImages: GalleryImage[] = [
  { src: "/assets/gallery/home/baby_boy_first_haircut.png", alt: "Baby boy getting his first haircut at The Yellow Balloon" },
  { src: "/assets/gallery/home/baby_getting_haircut.jpg", alt: "Baby getting haircut at The Yellow Balloon" },
  { src: "/assets/gallery/other/Happy_toddler_first_haircut_0364c47d.png", alt: "Happy toddler during first haircut experience" },
  { src: "/assets/gallery/other/Toddler_first_haircut_milestone_e5fcc8a3.png", alt: "Celebrating the first haircut milestone" },
  { src: "/assets/gallery/other/Gentle_first_haircut_service_72d2845c.png", alt: "Gentle first haircut service for young children" },
  { src: "/assets/gallery/other/Baby_first_salon_experience_b6db0a21.png", alt: "Baby's first salon experience" },
];

export const beforeAfterImages: GalleryImage[] = [
  { src: "/assets/gallery/other/Before_after_hair_transformation_79ac8226.png", alt: "Before and after hair transformation" },
  { src: "/assets/gallery/other/Before_after_haircut_transformation_71c71ae0.png", alt: "Before and after haircut transformation" },
];

export const salonImages: GalleryImage[] = [
  { src: "/assets/gallery/other/Modern_salon_interior_50f75e1e.png", alt: "Modern and welcoming salon interior" },
  { src: "/assets/gallery/other/Salon_team_photo_c49ae9ec.png", alt: "The Yellow Balloon salon team" },
];

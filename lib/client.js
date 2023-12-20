import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "nilrzidn",
  dataset: "production",
  apiVersion: "2023-12-19",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);


export const saveContactFormData = async (formData) => {
  try {
    // Customize this section to match your Sanity schema and dataset
    console.log('Received Form Data:', formData);
    const contactFormSchema = 'contactfrom'; 

    await client.create({
      _type: contactFormSchema,
      fullName: formData.fullName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      message: formData.message,
    });

    return { success: true };
  } catch (error) {
    console.error('Error saving form data to Sanity:', error);
    throw new Error('Failed to save form data to Sanity');
  }
};
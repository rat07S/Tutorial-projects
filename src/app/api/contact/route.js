import { connectToDB } from '../../../utils/database';
import Contact from '../../../models/contact';

export const POST = async (req) => {
  try {
    await connectToDB();
 
    const { name, email, message } = await req.json();

    if (!name || !email) {
      return new Response(
        JSON.stringify({ message: 'Name and Email are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    return new Response(
      JSON.stringify({ message: 'Message saved successfully' }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error saving contact:', error);
    return new Response(
      JSON.stringify({ message: 'Internal Server Error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

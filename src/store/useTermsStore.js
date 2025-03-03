import { create } from 'zustand';
import axios from 'axios';

const useTermsStore = create((set) => ({
    title: '',
    content: '',
    fetchTerms: async () => {
        try {
            const response = await axios.get('https://scf-cms-be-p7i0.onrender.com/api/v1/web/document/get-terms');
            const { title, content } = response.data.document;
            set({ title, content });
        } catch (error) {
            console.error('Error fetching terms:', error);
        }
    }
}));

export default useTermsStore;

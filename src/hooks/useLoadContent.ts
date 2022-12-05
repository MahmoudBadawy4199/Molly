// React
import { useEffect, useState } from 'react';
// Redux
import { useAppDispatch } from '../redux/hooks';
import { fillContent } from '../redux/contentSlice';
// Firebase
import { ref, onValue } from 'firebase/database';
import { database } from '../../firebase';
// Types
import { ContentType } from '../types';

export default function useLoadContent() {
    const [isContentLoaded, setContentLoaded] = useState(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        async function loadDataFromFirebaseAsync() {
            try {
                const dbRef = ref(database);
                onValue(
                    dbRef,
                    (snapshot) => {
                        const contentFromFirebase: ContentType = snapshot.val();
                        dispatch(fillContent(contentFromFirebase));
                        setContentLoaded(true);
                    },
                    {
                        onlyOnce: true,
                    },
                );
            } catch (e) {
                console.warn(e);
            }
        }
        loadDataFromFirebaseAsync();
    }, [dispatch]);

    return isContentLoaded;
}

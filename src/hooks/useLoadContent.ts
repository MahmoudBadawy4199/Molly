// React
import { useEffect, useState } from 'react';
// Redux
import { useAppDispatch } from '../redux/hooks';
import { fillContent } from '../redux/contentSlice';
import { clearError, setError } from '../redux/errorsSlice';
// Firebase
import { ref, onValue, goOffline } from 'firebase/database';
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
                        if (snapshot.exists()) {
                            const contentFromFirebase: ContentType = snapshot.val();
                            dispatch(fillContent(contentFromFirebase));
                            dispatch(clearError());
                            setContentLoaded(true);
                            goOffline(database);
                        } else {
                            dispatch(setError('Service is unavailable, Try Again Later'));
                            setContentLoaded(true);
                        }
                    },
                    {
                        onlyOnce: true,
                    },
                );
            } catch (e) {
                dispatch(setError('Service Currently Unavailable,Try Again Later'));
                setContentLoaded(true);
            }
        }
        loadDataFromFirebaseAsync();
    }, [dispatch]);

    return isContentLoaded;
}

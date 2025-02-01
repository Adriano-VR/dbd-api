import { getData, getPerksRandom } from '@/http/http';
import { DataItem, PerkItem } from '@/interface/int';
import React, { createContext, useContext, useState, ReactNode,useEffect } from 'react';

interface ContextProps {
    data: DataItem[];
    loading: boolean;
    fetchData: () => Promise<void>;
    getPerksRandomF: () => Promise<void>;
    perks: PerkItem[];
}

const ExampleContext = createContext<ContextProps | undefined>(undefined);

export const ExampleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [data, setData] = useState<DataItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [perks, setPerks] = useState<PerkItem[]>([]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await getData();
            const dataArray = Object.keys(response).map(key => ({
                id: key,
                ...response[key]
            }));
            setData(dataArray);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchDataOne = async () => {
        setLoading(true);
        try {
            const response = await getData();
            const dataArray = Object.keys(response).map(key => ({
                id: key,
                ...response[key]
            }));
            setData(dataArray);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const getPerksRandomF = async () => {
        setLoading(true);
        try {
            const response = await getPerksRandom();
            const dataArray = Object.keys(response).map(key => ({
                id: key,
                ...response[key]
            }));
            setPerks(dataArray);
        } catch (error) {
            console.error('Error fetching perks:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ExampleContext.Provider value={{ data, loading, fetchData, getPerksRandomF, perks }}>
            {children}
        </ExampleContext.Provider>
    );
};

export const useExampleContext = (): ContextProps => {
    const context = useContext(ExampleContext);
    if (context === undefined) {
        throw new Error('useExampleContext must be used within an ExampleProvider');
    }
    return context;
};
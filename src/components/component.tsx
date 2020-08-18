import * as React, { useEffect, useState } from 'react';
import config from 'config';

const apiEndpoint: string = config.apiUrl + config.metricsEndpoint;

import {useTimer} from '../hooks'

const callAPI = (query, setData, setLoading) => {
    fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify({
            query: query
        })
    })
        .then((res) => res.json())
        .then((res: string) => setData(res))
        .catch(err => console.log(err))
        .finally(() => setLoading(false));
}

function genQuery(timeRange: string, componentName: string, seed: number) {
    return `SELECT ${timeRange} WHERE c = ${componentName} AND x = ${(seed%7)==0?'true':'false'}`;
}
function Loading() {
    return <h2>Loading</h2>;
}
interface IProps {
    timeRange: string;
}
function C1(props: IProps) {
    const refreshInterval_Secs = 60;
    const query = genQuery(props.timeRange, "c1", Math.random());

    const [data, setData] = useState<string>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const timer = useTimer(refreshInterval_Secs);

    useEffect(() => {
        callAPI(query, setData, setLoading)
    }, [timer]);

    return loading ? <Loading /> : <>Hi {data}</>;
}
function C2(props: IProps) {
    const refreshInterval_Secs = 10;
    const query = genQuery(props.timeRange, "c2", Math.random());

    const [data, setData] = useState<string>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const timer = useTimer(refreshInterval_Secs);

    useEffect(() => {
        callAPI(query, setData, setLoading)
    }, [timer]);

    return loading ? <Loading /> : <>Hello there {data}</>;
}
function C3(props: IProps) {
    const refreshInterval_Secs = 15;
    const query = genQuery(props.timeRange, "c3", Math.random());

    const [data, setData] = useState<string>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const timer = useTimer(refreshInterval_Secs);

    useEffect(() => {
        callAPI(query, setData, setLoading)
    }, [timer]);

    return loading ? <Loading /> : <>Charlie {data} Tango</>;
}
function C4(props: IProps) {
    const refreshInterval_Secs = 42;
    const query = genQuery(props.timeRange, "c4", Math.random());

    const [data, setData] = useState<string>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const timer = useTimer(refreshInterval_Secs);

    useEffect(() => {
        callAPI(query, setData, setLoading)
    }, [timer]);

    return loading ? <Loading /> : <>A fox jumped {data}</>;
}
function C5(props: IProps) {
    const refreshInterval_Secs = 30;
    const query = genQuery(props.timeRange, "c5", Math.random());

    const [data, setData] = useState<string>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const timer = useTimer(refreshInterval_Secs);

    useEffect(() => {
        callAPI(query, setData, setLoading)
    }, [timer]);

    return loading ? <Loading /> : <>{data} is king</>;
}
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Table from '../components/Table'
import Immunity from '../components/Immunity'
import Eliminations from '../components/Eliminations'
import Target from '../components/Target'
import sockwars from '../public/sockwars.jpeg'
import styles from '../styles/Home.module.css'

export default function Home() {
return (
 <div>
    <Navbar />
    <Immunity />
      <div className="sockimg">
        <Image
          src={sockwars}
        />
      </div>
    <Target />
    <Eliminations />
    <Table />
    <Footer />
</div>
)
}

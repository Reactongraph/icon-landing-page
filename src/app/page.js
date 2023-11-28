import Header from '@/component/Header'
import SearchSection from '@/component/SearchSection'
import IconSlider from '@/component/IconSlider';
import GroupsSlider from '@/component/GroupsSlider';
import Equipment from '@/component/Equipment';
import SoftwareSection from '@/component/SoftwareSection';
import StayUpdateSection from '@/component/StayUpdateSection';
import Footer from '@/component/Footer';

export default function Home() {
  return (
    <>
    <Header/>
    <SearchSection/>
    <IconSlider/>
    <Equipment/>
    <GroupsSlider/>
    <SoftwareSection/>
    <StayUpdateSection/>
    <Footer/>
    </>
  )
}

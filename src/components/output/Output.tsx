import styled from '@emotion/styled'
import React from 'react'
import { useState } from 'react'
import KodButton from '../UI/button/KodButton'
import { Tabs } from '../UI/Tab'

const Root = styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: auto;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const HeaderItem = styled.div`
    display: flex;
    gap: 10px;
`

const Tab = styled.div`
    position: relative;
    flex-grow: 1;
`
const TabItem = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    overflow-y: auto;
`

const Output = () => {
    const [tabValue, setTabValue] = useState<number>(0)

    const handleChange = (value: number) => {
        setTabValue(value)
    }

    return (
        <Root>
            <Header>
                <Tabs onChange={handleChange} value={tabValue} names={["Konsol", "Input"]}/>
                <HeaderItem>
                    <KodButton>Run</KodButton>
                    <KodButton status='success'>Submit</KodButton>
                </HeaderItem>
            </Header>
            <Tab>
                <TabItem>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit maiores porro obcaecati quos tempora officiis deserunt quas, distinctio aspernatur esse et explicabo libero qui ipsum necessitatibus enim a veniam, eius dolore quidem nisi, provident quaerat tempore. Facilis error adipisci est assumenda quod fugit quo aperiam, voluptatem in ea deleniti nostrum beatae consequuntur accusantium voluptas vitae earum cum molestias velit, ut fuga vel. Iusto ducimus adipisci similique ipsum quia ipsam, veniam quos perferendis earum accusamus, nisi, molestiae blanditiis? Facilis, molestias minima. Vel, vero animi impedit inventore laboriosam reiciendis accusamus quasi omnis nihil ipsum voluptatibus officia cumque blanditiis! Eum, laboriosam quia. Atque incidunt assumenda voluptatibus sunt. Voluptates, at laboriosam. Qui est animi asperiores repudiandae necessitatibus obcaecati eum quaerat dolores fuga. Dignissimos ipsum quibusdam incidunt, ab rerum magnam perspiciatis optio sed reiciendis autem atque voluptate voluptatum eos voluptas inventore nostrum rem consectetur odit! Sapiente aliquam molestias ratione enim earum commodi, ipsa dignissimos error sint sed recusandae eum quisquam blanditiis odio non aspernatur. Illo dicta eveniet unde rerum nobis maxime provident, dolor in laudantium repellendus perferendis similique doloribus fuga laboriosam alias aliquam possimus? Quasi soluta tenetur debitis, corporis, vitae saepe fuga sequi sunt veniam rem id nobis asperiores! Pariatur impedit temporibus asperiores dignissimos, dolorem perspiciatis aliquam porro numquam labore sint eius molestias nihil maiores doloremque, non laborum fugiat quod possimus voluptatem laudantium placeat. Nesciunt, est reprehenderit rerum molestias deserunt laborum odio, quas ut veritatis magnam repudiandae eaque molestiae totam quos! Explicabo expedita doloremque ipsum nam officiis sapiente praesentium nobis dignissimos, perspiciatis tempore suscipit eum porro facilis! Fuga, deserunt id sed aliquid, modi odio dolorem asperiores quibusdam tempora, accusamus culpa cumque exercitationem error laudantium enim dolore officia est aspernatur consequatur neque expedita voluptates incidunt dolores. Minus consectetur corrupti eligendi dolorem rerum excepturi itaque pariatur. Aperiam suscipit natus iusto, rem fugit excepturi provident corrupti cum, odio quam, adipisci labore. Quod, possimus. Debitis quae cum voluptas temporibus obcaecati velit quo. Architecto laboriosam sint eaque quaerat commodi sed corrupti quisquam numquam qui ratione, illum doloremque eum recusandae? Expedita atque enim a nemo autem facilis at id animi, tenetur ullam incidunt, quibusdam dolorem quia! Illo, sequi eius. Rem, dolores. Modi aut enim commodi inventore neque natus porro! Reprehenderit, consequuntur distinctio! Ratione, dolorum? Sed fugit pariatur provident debitis hic. Dolore autem officia doloribus facere cum placeat facilis, id, illum iste ab, ut dolores quos nesciunt? Commodi alias est cupiditate sequi totam incidunt, itaque eos nesciunt nostrum, sint veniam labore provident aspernatur debitis ea ratione praesentium error veritatis omnis cumque aliquam! Rerum ad, esse voluptatibus eum ipsum aut. A eius cum rem ex corporis autem voluptatibus similique eaque ipsum voluptas eligendi, iusto, nam dicta voluptates architecto delectus voluptatem. Optio deleniti ratione quis quod veniam provident dicta cumque omnis sequi dignissimos magnam, delectus porro repellendus voluptas nemo similique nostrum dolorem iste ea et obcaecati? Praesentium mollitia architecto numquam voluptatem debitis ad eveniet quia modi amet doloremque hic laboriosam ratione maxime dolorum, quidem dolore, exercitationem laborum dicta nobis dolorem corrupti necessitatibus. Recusandae facere ad porro saepe ipsum deserunt harum odio delectus veritatis at! Excepturi, repellat voluptatibus placeat iusto similique necessitatibus, consequatur aspernatur voluptates debitis dignissimos, nemo voluptas eum id exercitationem repudiandae minima culpa perferendis laborum quae magnam accusantium nisi! Reprehenderit, ipsum enim! Quod explicabo tempore molestiae fugit non, sed magnam harum veritatis eum pariatur maiores commodi rem corporis ab perferendis, iusto esse consequuntur excepturi laborum. Voluptates dolor nihil expedita accusantium, ducimus aliquid quis quo. Recusandae unde necessitatibus assumenda dolore sed ullam eaque harum excepturi corrupti velit voluptatibus, libero veniam modi, laudantium tenetur pariatur reprehenderit ratione dolores facere numquam voluptas eius quos, quam tempora! Perspiciatis, odio! Saepe iste odit illum, est quidem asperiores delectus sint repudiandae placeat consequuntur nisi dolores voluptatum ducimus officiis obcaecati adipisci illo! Nesciunt id esse omnis deserunt numquam nam laborum iure reprehenderit dolorum amet mollitia, harum corrupti. Nihil veritatis, dolorem fuga quibusdam ipsum mollitia cumque placeat nisi, consequuntur, repudiandae error consequatur iste nam beatae provident saepe. Officiis expedita animi dolorem tempore, quam ipsam obcaecati excepturi delectus earum amet eaque deserunt exercitationem pariatur est blanditiis, maxime eveniet fugit quisquam voluptas nobis dicta! Odit reiciendis ex laborum possimus atque? Fugiat eos assumenda voluptatem quis, beatae sint quam dolorem laborum, nemo porro, natus eaque esse ad sunt id tenetur aut aspernatur odio. Magnam est hic, obcaecati minima dolore enim, nulla corrupti mollitia deserunt sit minus vero dolorum iusto quidem, voluptatibus aliquam maxime nostrum tempore fugit recusandae ad sunt. Fugit nostrum error, soluta sit eligendi sunt laudantium earum et quia enim, voluptatibus quam iure mollitia ea, blanditiis quo quidem itaque quod a! Repellat atque sed ipsum aperiam enim rem, excepturi, sequi culpa aliquam sapiente dolor dolores accusamus facilis iste? Voluptatem aspernatur dignissimos ipsum in eligendi, odit amet nisi molestiae deserunt, provident mollitia maxime? Culpa sequi molestias maiores voluptatem, a magni. Quo explicabo culpa, impedit, dolores error maxime, at blanditiis neque assumenda facere odit dignissimos illum similique non minus ullam sint temporibus mollitia labore officia iure dolorem recusandae rerum voluptas. Asperiores mollitia voluptatem animi repellat ipsum labore maiores. Ipsa voluptatibus deserunt dignissimos eum inventore cumque doloremque nemo! Esse, magnam veritatis! At delectus eligendi optio ratione quibusdam fugit! Architecto molestiae tempore beatae, quos error assumenda in dolor laborum tempora exercitationem, accusamus rem possimus aspernatur debitis enim consequuntur dolorum. Ipsum maxime accusantium voluptatem non fuga eveniet delectus odit quod quia fugit. Doloremque, consequuntur consequatur. Voluptate quia autem voluptas molestias ipsam omnis adipisci deleniti, aspernatur, magnam veniam molestiae asperiores delectus quam explicabo sunt debitis optio! Atque molestiae exercitationem deserunt vel veritatis quis accusantium qui dicta, quod consequuntur facilis blanditiis ullam vitae sapiente dolore vero velit corrupti similique ipsam laborum! Deleniti beatae ipsam reiciendis est! Saepe illum dolor voluptas at, assumenda ea veniam odio excepturi ex harum cumque omnis vitae, earum, voluptate soluta qui placeat. Labore animi, nemo incidunt in repellat dolores voluptas? Nostrum nemo non officiis, soluta maxime recusandae natus explicabo sint quasi, amet nulla illo quos reprehenderit mollitia eaque ullam autem perspiciatis doloremque nobis pariatur fugiat distinctio adipisci voluptas? Aut accusantium nihil optio recusandae aliquid impedit iste. Accusamus velit odio quibusdam fugit maxime laboriosam consequatur sed cumque?
                    test aksdj sakd
                </TabItem>
            </Tab>
        </Root>
    )
}

export default Output
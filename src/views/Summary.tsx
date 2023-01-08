import React, { FC, ReactElement } from 'react'
import { ISummary } from './interfaces/ISummary'

const Summary: FC<ISummary> = (props): ReactElement => {
    const { on } = props

    return (
        <div className="w-full my-8">
            {on ? "yearly" : "monthly"}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident sed maxime vitae, consequatur rerum nulla consequuntur nam debitis voluptate non ex laudantium iusto dicta architecto inventore perferendis officiis incidunt. Unde ex iure repudiandae quo quae maxime, praesentium dolores voluptatibus quisquam tempore doloribus! Voluptates asperiores id modi itaque nostrum consectetur nobis quaerat, accusamus voluptate nemo doloribus aut maxime accusantium? Vitae, excepturi ex libero provident quam aperiam exercitationem doloribus porro ab iure nam aliquid optio ullam delectus voluptate. Praesentium quidem autem maxime id nesciunt corporis impedit dolorum, vel unde perspiciatis blanditiis porro sed nostrum error optio. Aliquam magni quas incidunt eius, laudantium harum cum praesentium veniam ipsam, corporis alias blanditiis dolore aut animi quae at. Cupiditate tenetur quo temporibus quasi quae. Culpa repellat ipsam, maiores suscipit eum, veritatis, nemo adipisci illum distinctio porro officiis voluptas asperiores nulla sapiente est architecto nisi nostrum facere totam modi ipsum voluptate similique. Accusamus, sunt reiciendis unde dignissimos fugiat necessitatibus soluta laborum consequuntur repellendus, atque quibusdam corporis aliquam voluptatem deserunt voluptates porro alias quidem laboriosam non in harum nam. Laudantium iste dolores corporis odio doloribus quis deleniti. Soluta odit sit vel eius repellat consectetur sunt modi expedita veritatis, fugiat corporis, quisquam explicabo? Impedit blanditiis dignissimos repudiandae fugit?
        </div>
    )
}

export default Summary
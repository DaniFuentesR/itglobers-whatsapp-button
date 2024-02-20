import React from "react"; 
import PropTypes from "prop-types"

type Props = {
    logo: string //Whatsapp.png
    phone: string, // 3507064545
    message: string // Estás comunicandote con gymshark, por favor ingresa tu consulta
    width: number //40px
    height: number // 40px
}

const WhatsappButton = ({logo, phone, message, width, height }: Props) => {
    const formattedMessage = message.replace(/ /g, "%20")
    
    return(
        <div className="fixed bottom-2 right-2 flex flexColumn">
            <a 
                href={`https://wa.me/${phone}?text=${formattedMessage}`}
                target="_blank"
                rel="noreferrer noopener"
            >

                <img src={logo} width={width} height={height} alt="Logo de Whatsapp" />
            </a>
           
        </div>
    )
}

WhatsappButton.PropTypes = {
    logo: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
}

WhatsappButton.defaultProps= {
    logo: "mi-logo.png",
    phone: "1234567890",
    message: "Estás comunicandote con gymshark, por favor ingresa tu consulta",
    width: 60,
    height: 60
}

WhatsappButton.schema = {
    title: "Botón de Whatsapp",
    type: "object",
    properties:{
        logo:{
            title: "Logo de Whatsapp que se relacione con la marca",
            type: "string",
            widget: {
                "ui: widget": "image-uploader"
            }
        },
        phone:{
            title: "Telefono",
            description: "Agrega por favor el número de telefono",
            type: "string"
        },

        message:{
            title: "Mensaje",
            description: "Agrega por favor el número de telefono",
            type: "string",
            widget: {
                "ui: widget": "textarea"
            }
        },

        width:{
            title: "Telefono",
            description: "Agrega por favor el número de telefono",
            type: "number"
        },

        height:{
            title: "Telefono",
            description: "Agrega por favor el número de telefono",
            type: "number"
        }
    }
}

export default WhatsappButton; 
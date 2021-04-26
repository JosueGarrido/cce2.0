import React, {useState} from 'react';
import { TreeSelect } from 'antd';
const { TreeNode } = TreeSelect;

const SearchCores = props => {
    console.log( 'props', props );
    const state={
        value: undefined,
    };
    const onChange = value => {
        console.log(value);
        state.value = value;
    };

    return (

        <TreeSelect
            showSearch
            style={{ width: '110%', textAlign:'left', }}
            value={state.value}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Selecciona una Sede o Núcleo Provincial"
            allowClear
            treeDefaultExpandAll
            onChange={onChange}
        >

            <TreeNode value="SEDE NACIONAL" title={<b className="textSearch">SEDE NACIONAL</b>}>
                <TreeNode value="PRESIDENCIA NACIONAL" title={< div className="textSearch">PRESIDENCIA NACIONAL</div>}>
                    <TreeNode value="leaf1" title={< div className="textSearch"><b>Telf.:</b> 2221006 Ext. 205-209</div>} />
                    <TreeNode value="leaf2" title={< div className="textSearch"><b>Email:</b> presidencia.@casadelacultura.gob.ec</div>} />
                </TreeNode>
            </TreeNode>

            <TreeNode value="DIRECCIÓN DE FOMENTO ARTÍSTICO Y CULTURAL" title={<b className="textSearch">DIRECCIÓN DE FOMENTO ARTÍSTICO Y CULTURAL</b>}>
                <TreeNode value="leaf3" title={< div className="textSearch"><b>Telf.:</b> 2528840</div>} />
                <TreeNode value="leaf4" title={< div className="textSearch"><b>Email:</b> fomentoartisticoyculturalcce@gmail.com </div>} />
                <TreeNode value="leaf5" title={< div className="textSearch"><b>Dir.:</b> Av. 6 de Diciembre N16-224 y Pátria </div>} />
            </TreeNode>

            <TreeNode value="NÚCLEO DE AZUAY" title={<b className="textSearch">NÚCLEO DE AZUAY</b>}>
                <TreeNode value="leaf6" title={< div className="textSearch"><b>Telf.:</b> 07 2842-586</div>} />
                <TreeNode value="leaf7" title={< div className="textSearch"><b>Email:</b> nucleo.azuay@casadelacultura.gob.ec </div>} />
                <TreeNode value="leaf8" title={< div className="textSearch"><b>Dir.:</b> Presidente Córdova 789 y Luis Cordero, Cuenca </div>} />
            </TreeNode>

            <TreeNode value="NÚCLEO DE BOLÍVAR" title={<b className="textSearch">NÚCLEO DE BOLÍVAR</b>}>
                <TreeNode value="leaf9" title={< div className="textSearch"><b>Telf.:</b> 03  2550-641</div>} />
                <TreeNode value="leaf10" title={< div className="textSearch"><b>Email:</b> nucleo.bolivar@casadelacultura.gob.ec </div>} />
                <TreeNode value="leaf11" title={< div className="textSearch"><b>Dir.:</b> Manuela Cañizares 511 y Sucre, Guaranda </div>} />
            </TreeNode>

            <TreeNode value="NÚCLEO DE CAÑAR" title={<b className="textSearch">NÚCLEO DE CAÑAR</b>}>
                <TreeNode value="leaf12" title={< div className="textSearch"><b>Telf.:</b> 07 2240-077 / 07 2243-111</div>} />
                <TreeNode value="leaf13" title={< div className="textSearch"><b>Email:</b> scasaculturacanar@gmail.com </div>} />
                <TreeNode value="leaf14" title={< div className="textSearch"><b>Dir.:</b> Calle Bolívar y Av. Aurelio Jaramillo S/N, Azoguez   </div>} />
            </TreeNode>

            <TreeNode value="NÚCLEO DEL CARCHI" title={<b className="textSearch">NÚCLEO DEL CARCHI</b>}>
                <TreeNode value="leaf15" title={< div className="textSearch"><b>Telf.:</b> 06 2980-172 / 06 2986-641</div>} />
                <TreeNode value="leaf16" title={< div className="textSearch"><b>Dir.:</b> Av. Panamá y Cotopaxi o Av. De la Cultura, Tulcán</div>} />
            </TreeNode>

            <TreeNode value="NÚCLEO DE COTOPAXI" title={<b className="textSearch">NÚCLEO DE COTOPAXI</b>}>
                <TreeNode value="leaf17" title={< div className="textSearch"><b>Telf.:</b> 03 2813-247 / 03 2813-248</div>} />
                <TreeNode value="leaf18" title={< div className="textSearch"><b>Dir.:</b> Antonio Vela y Padre Salcedo, Latacunga</div>} />
            </TreeNode>

            <TreeNode value="NÚCLEO DE CHIMBORAZO" title={<b className="textSearch">NÚCLEO DE CHIMBORAZO</b>}>
                <TreeNode value="leaf19" title={< div className="textSearch"><b>Telf.:</b> 03  2960-219 / 03 2966-118</div>} />
                <TreeNode value="leaf20" title={< div className="textSearch"><b>Email:</b> cculturach@hotmail.com </div>} />
                <TreeNode value="leaf21" title={< div className="textSearch"><b>Dir.:</b> Rocafuerte y Diez de Agosto, Riobamba</div>} />
            </TreeNode>

            <TreeNode value="NÚCLEO DE EL ORO" title={<b className="textSearch">NÚCLEO DE EL ORO</b>}>
                <TreeNode value="leaf22" title={< div className="textSearch"><b>Telf.:</b> 07 2930-711 / 07 2937-117</div>} />
                <TreeNode value="leaf23" title={< div className="textSearch"><b>Dir.:</b> Bolívar entre Juan Montalvo y 9 de Mayo, Machala</div>} />
            </TreeNode>

            <TreeNode value="NÚCLEO DE ESMERALDAS" title={<b className="textSearch">NÚCLEO DE ESMERALDAS</b>}>
                <TreeNode value="leaf24" title={< div className="textSearch"><b>Telf.:</b> 06 2452-419</div>} />
                <TreeNode value="leaf25" title={< div className="textSearch"><b>Dir.:</b> Sucre y Salinas, esmeraldas </div>} />
            </TreeNode>

            <TreeNode value="NÚCLEO DE GALÁPAGOS" title={<b className="textSearch">NÚCLEO DE GALÁPAGOS</b>}>
                <TreeNode value="leaf26" title={< div className="textSearch"><b>Telf.:</b> 05 2520-584</div>} />
                <TreeNode value="leaf27" title={< div className="textSearch"><b>Dir.:</b> Av. Charles Darwin y Hernán de Melville   </div>} />
            </TreeNode>

            <TreeNode value="NÚCLEO DE GUAYAS" title={<b className="textSearch">NÚCLEO DE GUAYAS</b>}>
                <TreeNode value="leaf28" title={< div className="textSearch"><b>Telf.:</b> 04 3812010 Ext. 1002/ 1001</div>} />
                <TreeNode value="leaf29" title={< div className="textSearch"><b>Email:</b> nucleo.guayas@casadelacultura.gob.ec </div>} />
                <TreeNode value="leaf30" title={< div className="textSearch"><b>Dir.:</b> Av. 9 de Octubre 1200 y Pedro Moncayo</div>} />
            </TreeNode>

            <TreeNode value="NÚCLEO DE IMBABURA" title={<b className="textSearch">NÚCLEO DE IMBABURA</b>}>
                <TreeNode value="leaf31" title={< div className="textSearch"><b>Telf.:</b> 06 2951-294 / 06  2641-084 / 06  2641-083</div>} />
                <TreeNode value="leaf32" title={< div className="textSearch"><b>Email:</b> nucleo.imbabura@casadelacultura.gob.ec </div>} />
                <TreeNode value="leaf33" title={< div className="textSearch"><b>Dir.:</b> Pedro Rodríguez 389 y García Moreno</div>} />
            </TreeNode>

            <TreeNode value="NÚCLEO DE LOJA" title={<b className="textSearch">NÚCLEO DE LOJA</b>}>
                <TreeNode value="leaf34" title={< div className="textSearch"><b>Telf.:</b> 07 2571-672 / 07  2571-004</div>} />
                <TreeNode value="leaf35" title={< div className="textSearch"><b>Dir.:</b> Colón 1312 y Bernardo Valdivieso</div>} />
            </TreeNode>

            <TreeNode value="NÚCLEO DE LOS RIOS" title={<b className="textSearch">NÚCLEO DE LOS RIOS</b>}>
                <TreeNode value="leaft36" title={< div className="textSearch"><b>Telf.:</b> 05 2020-364 / 05 2020-620</div>} />
                <TreeNode value="leaft37" title={< div className="textSearch"><b>Dir.:</b> Gral. Barona y 9 de Noviembre   </div>} />
            </TreeNode>

            <TreeNode value="NÚCLEO DE MANABI" title={<b className="textSearch">NÚCLEO DE MANABI</b>}>
                <TreeNode value="leaf36" title={< div className="textSearch"><b>Telf.:</b> 05 2652-243 / 05  2652-469</div>} />
                <TreeNode value="leaf37" title={< div className="textSearch"><b>Dir.:</b> Sucre y García Moreno</div>} />
            </TreeNode>

            <TreeNode value="NÚCLEO DE MORONA SANTIAGO" title={<b className="textSearch">NÚCLEO DE MORONA SANTIAGO</b>}>
                <TreeNode value="leaf38" title={< div className="textSearch"><b>Telf.:</b> 07 2700-481 / 07  2702-395</div>} />
                <TreeNode value="leaf39" title={< div className="textSearch"><b>Email:</b> nucleo.morona@casadelacultura.gob.ec / ccmorona@hotmail.com </div>} />
                <TreeNode value="leaf40" title={< div className="textSearch"><b>Dir.:</b> 10 de Agosto y Soasti Esq.</div>} />
            </TreeNode>

            <TreeNode value="NÚCLEO DE NAPO" title={<b className="textSearch">NÚCLEO DE NAPO</b>}>
                <TreeNode value="leaf41" title={< div className="textSearch"><b>Telf.:</b> 06 2887-853</div>} />
                <TreeNode value="leaf42" title={< div className="textSearch"><b>Email:</b> nucleo.napo@casadelacultura.gob.ec / nucleo.napo@gmail.com	</div>} />
                <TreeNode value="leaf43" title={< div className="textSearch"><b>Dir.:</b> Aeropuerto #2, Mzna. T, casa #9</div>} />
            </TreeNode>

            <TreeNode value="NÚCLEO DE ORELLANA" title={<b className="textSearch">NÚCLEO DE ORELLANA</b>}>
                <TreeNode value="leaf44" title={< div className="textSearch"><b>Telf.:</b> 06-2860-640 </div>} />
                <TreeNode value="leaf45" title={< div className="textSearch"><b>Email:</b> nucleo.orellana@casadelacultura.gob.ec / nucleorellana_secretaria@yahoo.es</div>} />
                <TreeNode value="leaf46" title={< div className="textSearch"><b>Dir.:</b> Calles Quito y  Pompeya, Orellana</div>} />
            </TreeNode>

            <TreeNode value="NÚCLEO DE PASTAZA" title={<b className="textSearch">NÚCLEO DE PASTAZA</b>}>
                <TreeNode value="leaf47" title={< div className="textSearch"><b>Telf.:</b> 03 2889-002 / 03 2885-933 </div>} />
                <TreeNode value="leaf48" title={< div className="textSearch"><b>Email:</b> nucleo.pastaza@casadelacultura.gob.ec / nucleorellana_secretaria@yahoo.es</div>} />
                <TreeNode value="leaf49" title={< div className="textSearch"><b>Dir.:</b>  Calle Bolívar y 27 de Febrero, Puyo</div>} />
            </TreeNode>

            <TreeNode value="NÚCLEO DE PICHINCHA" title={<b className="textSearch">NÚCLEO DE PICHINCHA</b>}>
                <TreeNode value="leaf50" title={< div className="textSearch"><b>Telf.:</b> 02-380-9850 </div>} />
                <TreeNode value="leaf51" title={< div className="textSearch"><b>Email:</b> secretarianucleop@gmail.com</div>} />
                <TreeNode value="leaf52" title={< div className="textSearch"><b>Dir.:</b> Av.10 de Agosto y Patria (Edif. Banco de Préstamo), Quito</div>} />
            </TreeNode>

            <TreeNode value="NÚCLEO DE SANTA ELENA" title={<b className="textSearch">NÚCLEO DE SANTA ELENA</b>}>
                <TreeNode value="leaf53" title={< div className="textSearch"><b>Telf.:</b> 04 2940-276 / 2942-109 </div>} />
                <TreeNode value="leaf54" title={< div className="textSearch"><b>Email:</b> nucleo.santaelena@casadelacultura.gob.ec / ccenucleoselena@hotmail.com</div>} />
                <TreeNode value="leaf55" title={< div className="textSearch"><b>Dir.:</b> Calle  Bolívar y Olmedo, Santa Elena</div>} />
            </TreeNode>

            <TreeNode value="NÚCLEO DE SANTO DOMINGO DE LOS TSÁCHILAS" title={<b className="textSearch">NÚCLEO DE SANTO DOMINGO DE LOS TSÁCHILAS</b>}>
                <TreeNode value="leaf56" title={< div className="textSearch"><b>Telf.:</b> 02-2753-932</div>} />
                <TreeNode value="leaf57" title={< div className="textSearch"><b>Email:</b> núcleo.santodomingo@casadelacultura.gob.ec</div>} />
                <TreeNode value="leaf58" title={< div className="textSearch"><b>Dir.:</b> Calle Río Pilatón y Río Chone, Santo Domingo</div>} />
            </TreeNode>

            <TreeNode value="NÚCLEO DE SUCUMBÍOS" title={<b className="textSearch">NÚCLEO DE SUCUMBÍOS</b>}>
                <TreeNode value="leaf59" title={< div className="textSearch"><b>Telf.:</b> 06 -2362-535 / 06 -2362-545</div>} />
                <TreeNode value="leaf60" title={< div className="textSearch"><b>Email:</b> casadelacultura-ns@andinanet.net / nucleo.sucumbios@casadelacultura.gob.ec</div>} />
                <TreeNode value="leaf61" title={< div className="textSearch"><b>Dir.:</b> Barrio Julio Marín Calle Principal y Bahía, Nueva Loja-Lago Agrio</div>} />
            </TreeNode>

            <TreeNode value="NÚCLEO DE TUNGURAHUA" title={<b className="textSearch">NÚCLEO DE TUNGURAHUA</b>}>
                <TreeNode value="leaf62" title={< div className="textSearch"><b>Telf.:</b> 03 2820-338 / 03 2823-770</div>} />
                <TreeNode value="leaf63" title={< div className="textSearch"><b>Email:</b> ccentsecretaria@yahoo.com / nucleo.tungurahua@casadelacultura.gob.ec</div>} />
                <TreeNode value="leaf64" title={< div className="textSearch"><b>Dir.:</b> Bolívar 18-34 y Montalvo</div>} />
            </TreeNode>

            <TreeNode value="NÚCLEO DE ZAMORA CHINCHIPE" title={<b className="textSearch">NÚCLEO DE ZAMORA CHINCHIPE</b>}>
                <TreeNode value="leaf65" title={< div className="textSearch"><b>Telf.:</b> 07 -2605-441 / 07  -2607-049 / 07 -2606-515</div>} />
                <TreeNode value="leaf66" title={< div className="textSearch"><b>Email:</b> ccezamorach@yahoo.es / nucleo.zamorachinchipe@casadelacultura.gob.ec</div>} />
                <TreeNode value="leaf67" title={< div className="textSearch"><b>Dir.:</b> Hernando de Benavente y Pedro de Barahona, Zamora</div>} />
            </TreeNode>

        </TreeSelect>

    );
};

export default SearchCores;

